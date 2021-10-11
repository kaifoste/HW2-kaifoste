CREATE DATABASE IF NOT EXISTS bookdb;
USE bookdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48) NOT NULL,
    author varchar(48),
    yearpublished int NOT NULL DEFAULT 0,
    publisher varchar(48),
    pages int NOT NULL DEFAULT 0,
    msrp int NOT NULL DEFAULT 0,
    rating int NOT NULL DEFAULT 0
);

INSERT INTO book (id, title, author, yearpublished, publisher, pages, msrp, rating) VALUES 
(1, 'To Kill a Mockingbird', 'Harper Lee', 1960, 'J. B. Lippincott & Co.', 281, 12, 4),
(2, 'Moby Dick', 'Herman Melville', 1851, 'Harper & Brothers', 782, 4, 2),
(3, 'Circe', 'Madeline Miller', 2018, 'Little, Brown and Company', 393, 12, 4),
(4, 'The Midnight Library', 'Matt Haig', 2020, 'Macmillan', 304, 10, 5);