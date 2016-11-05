CREATE DATABASE burgers_db;
USE burgers_db;

CREATE table burgers
(
	id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    TIMESTAMP()
    );
    
    
    
