-- Run this in phpMyAdmin > SQL.
CREATE DATABASE IF NOT EXISTS hopxdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hopxdb;

-- If you have NOT created the appointment table yet, run this CREATE TABLE.
CREATE TABLE IF NOT EXISTS appointment (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100) NULL,
    last_name VARCHAR(100) NOT NULL,
    date_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    venue VARCHAR(255) NOT NULL,
    venue_type VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'Confirmed',
    reference_code VARCHAR(20) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_venue_schedule (venue, date_time, end_time),
    INDEX idx_appointment_status (status)
) ENGINE=InnoDB;

-- If your appointment table ALREADY EXISTS with the original seven columns,
-- do not run CREATE TABLE again. Instead, run these ALTER statements once:
-- ALTER TABLE appointment ADD COLUMN end_time DATETIME NOT NULL AFTER date_time;
-- ALTER TABLE appointment ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'Confirmed';
-- ALTER TABLE appointment ADD COLUMN reference_code VARCHAR(20) NULL UNIQUE;
-- ALTER TABLE appointment ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
-- ALTER TABLE appointment CHANGE COLUMN `venue type` venue_type VARCHAR(20) NOT NULL;
