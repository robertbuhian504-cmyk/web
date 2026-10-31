-- Use this ONLY if hopxdb.appointment already exists with your original columns:
-- id, name, middle_name, last_name, date_time, venue, and `venue type`.
-- Back up the table first. Run this script once in phpMyAdmin > SQL.
USE hopxdb;

-- Rename the column with a space to a PHP/SQL-friendly name.
ALTER TABLE appointment CHANGE COLUMN `venue type` venue_type VARCHAR(20) NOT NULL;

-- Add end_time as nullable first so existing rows do not block the migration.
ALTER TABLE appointment ADD COLUMN end_time DATETIME NULL AFTER date_time;
UPDATE appointment SET end_time = DATE_ADD(date_time, INTERVAL 1 HOUR) WHERE end_time IS NULL;
ALTER TABLE appointment MODIFY COLUMN end_time DATETIME NOT NULL;

ALTER TABLE appointment ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'Confirmed';
ALTER TABLE appointment ADD COLUMN reference_code VARCHAR(20) NULL UNIQUE;
UPDATE appointment
SET reference_code = CONCAT('HX-OLD-', LPAD(id, 8, '0'))
WHERE reference_code IS NULL;
ALTER TABLE appointment MODIFY COLUMN reference_code VARCHAR(20) NOT NULL;
ALTER TABLE appointment ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

CREATE INDEX idx_venue_schedule ON appointment (venue, date_time, end_time);
CREATE INDEX idx_appointment_status ON appointment (status);
