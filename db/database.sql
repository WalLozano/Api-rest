CREATE DATABASE IF NOT EXISTS jumpfiredb;

USE jumpfiredb;

CREATE TABLE jumper (
    id INT(11) NOT NULL AUTO_INCREMENT,
    hostname VARCHAR(200) DEFAULT NULL,
    jump VARCHAR(300) DEFAULT NULL,
    jumptime INT(10) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE jumper;


INSERT INTO jumper VALUES 
(1, 'survey 1', 'https://s.cint.com/Survey/Complete', 15);
(2, 'survey 2', 'https://s.cint.com/Survey/Complete2', 12);
(3, 'survey 3', 'https://s.cint.com/Survey/Complete3', 25);
(4, 'survey 4', 'https://s.cint.com/Survey/Complete4', 30);
(5, 'survey 5', 'https://s.cint.com/Survey/Complete5', 18);

INSERT INTO jumper VALUES 
(5, 'survey 5', 'https://s.cint.com/Survey/Complete5', 18);