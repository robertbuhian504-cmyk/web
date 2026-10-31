<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/db.php';
echo json_encode(['success' => true, 'message' => 'HOOP X is connected to the hopxdb database.']);
