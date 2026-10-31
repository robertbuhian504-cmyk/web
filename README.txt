HOOP X - Basketball Court Appointment System

REQUIREMENTS
- XAMPP with Apache and MySQL running
- PHP with PDO MySQL enabled
- MySQL database named hopxdb

INSTALLATION
1. Copy the entire HOOP-X folder into C:\xampp\htdocs\
2. Open http://localhost/phpmyadmin
3. In phpMyAdmin > SQL:
   - If the appointment table does NOT exist yet, run database.sql.
   - If your appointment table ALREADY EXISTS with your original seven columns, back it up and run migrate_existing_table.sql instead. This renames `venue type` to venue_type and adds the required columns while preserving old records.
   - Do not run the migration more than once.
4. Check backend/db.php. Default XAMPP credentials are username root and a blank password. Change them if yours differ.
5. Start Apache and MySQL in XAMPP Control Panel.
6. Open http://localhost/HOOP-X/ (do not double-click index.html).
7. Test the database connection by opening http://localhost/HOOP-X/backend/test_connection.php.
   Expected response: success true and a message saying it is connected.
8. Select a court, click SET APPOINTMENT, complete the form, and confirm.

BOOKING RULES
- Appointment duration is flexible: users choose start and end time.
- The browser checks the court's listed operating hours.
- PHP checks that the start is in the future and end is later than start.
- PHP checks for overlapping confirmed bookings for the same court.
- Successful bookings are automatically marked Confirmed.

IMPORTANT NOTES
- This is a student-project starting point. For production, add server-side validation of each court's official operating hours, rate limiting, CSRF protection, admin authentication, and stronger concurrency protection for simultaneous requests.
- Existing appointment rows need a valid end_time. If your table already contains records, add end_time as nullable first, update old rows, then make it NOT NULL.
- The sample court data and operating hours are currently stored in Script.js, not in MySQL.
