/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
 *  to create the database and the tables.*/

DROP DATABASE IF EXISTS hrlax49students;

CREATE DATABASE hrlax49students;

USE hrlax49students;

CREATE TABLE students (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  imgurl varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO students (id, name) VALUES (1, "Rockwell");
INSERT INTO students (id, name) VALUES (2, "Alexandria");
INSERT INTO students (id, name) VALUES (3, "Austin");
INSERT INTO students (id, name) VALUES (4, "Chris");
INSERT INTO students (id, name) VALUES (5, "Alex");
INSERT INTO students (id, name) VALUES (6, "Daniel");
INSERT INTO students (id, name) VALUES (7, "Eric");
INSERT INTO students (id, name) VALUES (8, "Estevan");
INSERT INTO students (id, name) VALUES (9, "Kevin");
INSERT INTO students (id, name) VALUES (10, "Irving");
INSERT INTO students (id, name) VALUES (11, "Jimmy");
INSERT INTO students (id, name) VALUES (12, "Matthew C.");
INSERT INTO students (id, name) VALUES (13, "Matthew T.");
INSERT INTO students (id, name) VALUES (14, "Michael");
INSERT INTO students (id, name) VALUES (15, "Samantha");
INSERT INTO students (id, name) VALUES (16, "Sarah");
INSERT INTO students (id, name) VALUES (17, "Siva");
INSERT INTO students (id, name) VALUES (18, "Teresa");
INSERT INTO students (id, name) VALUES (19, "Tiffany");
INSERT INTO students (id, name) VALUES (20, "Tristen");
INSERT INTO students (id, name) VALUES (21, "Valerie");
INSERT INTO students (id, name) VALUES (22, "Zebib");

INSERT INTO images (id, imgurl) VALUES (1, "https://ca.slack-edge.com/T2SV1LBC6-U02L8DXS8KU-d3dcbb65d510-512");
INSERT INTO images (id, imgurl) VALUES (2, "https://ca.slack-edge.com/T2SV1LBC6-U02RUJB7C4R-1d033a7f1c44-512");
INSERT INTO images (id, imgurl) VALUES (3, "https://ca.slack-edge.com/T2SV1LBC6-U02R98WCBD4-67145216800f-512");
INSERT INTO images (id, imgurl) VALUES (4, "https://ca.slack-edge.com/T2SV1LBC6-U02RFUN0XCJ-a7a9a57095e6-512");
INSERT INTO images (id, imgurl) VALUES (5, "https://ca.slack-edge.com/T2SV1LBC6-U02RUJB38UR-407b53c5bc66-512");
INSERT INTO images (id, imgurl) VALUES (6, "https://ca.slack-edge.com/T2SV1LBC6-U02R98WHG5U-245a09e9e474-512");
INSERT INTO images (id, imgurl) VALUES (7, "https://ca.slack-edge.com/T2SV1LBC6-U02R1ARHV6K-a2f846ccac69-512");
INSERT INTO images (id, imgurl) VALUES (8, "https://ca.slack-edge.com/T2SV1LBC6-U02R98W85UN-51e29d1f9680-512");
INSERT INTO images (id, imgurl) VALUES (9, "https://ca.slack-edge.com/T2SV1LBC6-U02RFUMSFEE-5d863f6ac595-512");
INSERT INTO images (id, imgurl) VALUES (10, "https://ca.slack-edge.com/T2SV1LBC6-U02RUJBKJRF-e6d58e77d254-512");
INSERT INTO images (id, imgurl) VALUES (11, "https://ca.slack-edge.com/T2SV1LBC6-U02RJ7Y1K4L-af779a701755-512");
INSERT INTO images (id, imgurl) VALUES (12, "https://ca.slack-edge.com/T2SV1LBC6-U02R1AQS895-aded134ef477-512");
INSERT INTO images (id, imgurl) VALUES (13, "https://ca.slack-edge.com/T2SV1LBC6-U02R98WGMRU-16149b441449-512");
INSERT INTO images (id, imgurl) VALUES (14, "https://ca.slack-edge.com/T2SV1LBC6-U02R98W4738-1e0ee56c5236-512");
INSERT INTO images (id, imgurl) VALUES (15, "https://ca.slack-edge.com/T2SV1LBC6-U02RFUN90JE-1742c83ec261-512");
INSERT INTO images (id, imgurl) VALUES (16, "https://ca.slack-edge.com/T2SV1LBC6-U02R98W01K8-8212b9214aa7-512");
INSERT INTO images (id, imgurl) VALUES (17, "https://ca.slack-edge.com/T2SV1LBC6-U02RG0C5U67-564038ca9acb-512");
INSERT INTO images (id, imgurl) VALUES (18, "https://ca.slack-edge.com/T2SV1LBC6-U02RUJBQ3SM-50f2bb3e2331-512");
INSERT INTO images (id, imgurl) VALUES (19, "https://ca.slack-edge.com/T2SV1LBC6-U02RKR7LF0A-c36889daf200-512");
INSERT INTO images (id, imgurl) VALUES (20, "https://ca.slack-edge.com/T2SV1LBC6-U02RJ7YDSF6-b7aaa8ad4742-512");
INSERT INTO images (id, imgurl) VALUES (21, "https://ca.slack-edge.com/T2SV1LBC6-U02RFUN51MG-7d2efdbbfdaa-512");
INSERT INTO images (id, imgurl) VALUES (22, "https://ca.slack-edge.com/T2SV1LBC6-U02R98VRERL-252837e8df3f-512");