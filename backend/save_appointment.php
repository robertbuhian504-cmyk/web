<?php
header('Content-Type: application/json; charset=utf-8');
date_default_timezone_set('Asia/Manila');
require_once __DIR__ . '/db.php';

function respond(int $status, array $data): void {
    http_response_code($status);
    echo json_encode($data);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'message' => 'Only POST requests are allowed.']);
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    respond(400, ['success' => false, 'message' => 'Invalid request data.']);
}

$firstName = trim($input['name'] ?? '');
$middleName = trim($input['middle_name'] ?? '');
$lastName = trim($input['last_name'] ?? '');
$venue = trim($input['venue'] ?? '');
$venueType = trim($input['venue_type'] ?? '');
$start = trim($input['date_time'] ?? '');
$end = trim($input['end_time'] ?? '');

if ($firstName === '' || $lastName === '' || $venue === '' || !in_array($venueType, ['indoor', 'outdoor'], true) || $start === '' || $end === '') {
    respond(422, ['success' => false, 'message' => 'Please complete all required appointment fields.']);
}

$startDate = DateTime::createFromFormat('Y-m-d H:i:s', $start);
$endDate = DateTime::createFromFormat('Y-m-d H:i:s', $end);
$now = new DateTime();
if (!$startDate || !$endDate || $startDate->format('Y-m-d H:i:s') !== $start || $endDate->format('Y-m-d H:i:s') !== $end) {
    respond(422, ['success' => false, 'message' => 'Invalid appointment date or time.']);
}
if ($startDate <= $now || $endDate <= $startDate) {
    respond(422, ['success' => false, 'message' => 'Choose a future start time and an end time later than the start time.']);
}

try {
    // Transaction keeps the availability check and insert together for this basic project.
    $pdo->beginTransaction();
    $check = $pdo->prepare(
        "SELECT id FROM appointment
         WHERE venue = :venue
           AND status <> 'Cancelled'
           AND date_time < :requested_end
           AND end_time > :requested_start
         LIMIT 1 FOR UPDATE"
    );
    $check->execute([
        ':venue' => $venue,
        ':requested_end' => $end,
        ':requested_start' => $start
    ]);
    if ($check->fetch()) {
        $pdo->rollBack();
        respond(409, ['success' => false, 'message' => 'Sorry, this court is already booked during that time. Please choose another time.']);
    }

    $reference = 'HX-' . strtoupper(bin2hex(random_bytes(4)));
    $insert = $pdo->prepare(
        "INSERT INTO appointment
         (name, middle_name, last_name, date_time, end_time, venue, venue_type, status, reference_code)
         VALUES (:name, :middle_name, :last_name, :date_time, :end_time, :venue, :venue_type, 'Confirmed', :reference_code)"
    );
    $insert->execute([
        ':name' => $firstName,
        ':middle_name' => $middleName !== '' ? $middleName : null,
        ':last_name' => $lastName,
        ':date_time' => $start,
        ':end_time' => $end,
        ':venue' => $venue,
        ':venue_type' => $venueType,
        ':reference_code' => $reference
    ]);
    $pdo->commit();
    respond(201, ['success' => true, 'message' => 'Appointment confirmed.', 'reference' => $reference]);
} catch (PDOException $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    respond(500, ['success' => false, 'message' => 'The appointment could not be saved. Check your database table structure.']);
}
