SET foreign_key_checks = 0;
DROP TABLE if exists establishment;
SET foreign_key_checks = 1;

CREATE TABLE `establishment`(
`id` INT NOT NULL AUTO_INCREMENT, 
`name` VARCHAR(255) NOT NULL,
`address` VARCHAR(255) NOT NULL,
`area` VARCHAR(255) NOT NULL,
PRIMARY KEY(`id`)
);


SET foreign_key_checks = 0;
DROP TABLE if exists postmeal;
SET foreign_key_checks = 1;

CREATE TABLE `postmeal`(
`id` INT NOT NULL AUTO_INCREMENT, 
`restaurant_id` VARCHAR(255) NOT NULL,
`shelter_name` VARCHAR(255) NOT NULL,
`description` VARCHAR(255) NOT NULL,
`is_taken` VARCHAR(255) NOT NULL,
`time_frame` VARCHAR(255) NOT NULL,
 PRIMARY KEY(`id`)
);