
\restrict 6prZxWIPTOXaC3rxWNho5Yiye5nmQmGFqj3bVx2oniQKt1MEm527ebNHEkdwrzV



SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE SCHEMA hogwarts;


ALTER SCHEMA hogwarts OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;


CREATE TABLE hogwarts.course_students (
    course_id integer NOT NULL,
    student_id integer NOT NULL
);


ALTER TABLE hogwarts.course_students OWNER TO postgres;


CREATE TABLE hogwarts.courses (
    id integer NOT NULL,
    name text NOT NULL,
    teacher_id integer NOT NULL
);


ALTER TABLE hogwarts.courses OWNER TO postgres;


ALTER TABLE hogwarts.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME hogwarts.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE hogwarts.houses (
    id integer NOT NULL,
    name text NOT NULL,
    color text NOT NULL,
    founder text NOT NULL
);


ALTER TABLE hogwarts.houses OWNER TO postgres;


ALTER TABLE hogwarts.houses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME hogwarts.houses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE hogwarts.students (
    id integer NOT NULL,
    name text NOT NULL,
    house_id integer NOT NULL
);


ALTER TABLE hogwarts.students OWNER TO postgres;


ALTER TABLE hogwarts.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME hogwarts.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE hogwarts.teachers (
    id integer NOT NULL,
    name text NOT NULL,
    house_id integer NOT NULL
);


ALTER TABLE hogwarts.teachers OWNER TO postgres;


ALTER TABLE hogwarts.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME hogwarts.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



INSERT INTO hogwarts.course_students VALUES (1, 1);
INSERT INTO hogwarts.course_students VALUES (1, 3);
INSERT INTO hogwarts.course_students VALUES (2, 2);



INSERT INTO hogwarts.courses OVERRIDING SYSTEM VALUE VALUES (2, 'Charms', 2);
INSERT INTO hogwarts.courses OVERRIDING SYSTEM VALUE VALUES (3, 'Potions', 2);
INSERT INTO hogwarts.courses OVERRIDING SYSTEM VALUE VALUES (4, 'Defense Against the Dark Arts', 1);
INSERT INTO hogwarts.courses OVERRIDING SYSTEM VALUE VALUES (5, 'Potions', 1);
INSERT INTO hogwarts.courses OVERRIDING SYSTEM VALUE VALUES (1, 'Advanced Transfiguration', 1);



INSERT INTO hogwarts.houses OVERRIDING SYSTEM VALUE VALUES (1, 'Gryffindor', 'Red and gold', 'Godric Gryffindor');
INSERT INTO hogwarts.houses OVERRIDING SYSTEM VALUE VALUES (2, 'Ravenclaw', 'Blue and bronze', 'Rowena Ravenclaw');
INSERT INTO hogwarts.houses OVERRIDING SYSTEM VALUE VALUES (3, 'Hufflepuff', 'Yellow and black', 'Helga Hufflepuff');
INSERT INTO hogwarts.houses OVERRIDING SYSTEM VALUE VALUES (4, 'Slytherin', 'Green and silver', 'Salazar Slytherin');



INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (1, 'Harry Potter', 1);
INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (2, 'Hermione Granger', 1);
INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (3, 'Ron Weasley', 1);
INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (4, 'Luna Lovegood', 2);
INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (5, 'Albus Severus Potter', 4);
INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (6, 'Cedric Diggory', 3);
INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (7, 'Neville Longbottom', 1);
INSERT INTO hogwarts.students OVERRIDING SYSTEM VALUE VALUES (8, 'Draco Malfoy', 4);



INSERT INTO hogwarts.teachers OVERRIDING SYSTEM VALUE VALUES (1, 'Minerva McGonagall', 1);
INSERT INTO hogwarts.teachers OVERRIDING SYSTEM VALUE VALUES (2, 'Filius Flitwick', 2);
INSERT INTO hogwarts.teachers OVERRIDING SYSTEM VALUE VALUES (3, 'Pomona Sprout', 3);
INSERT INTO hogwarts.teachers OVERRIDING SYSTEM VALUE VALUES (4, 'Severus Snape', 4);
INSERT INTO hogwarts.teachers OVERRIDING SYSTEM VALUE VALUES (5, 'Alastor Moody', 1);



SELECT pg_catalog.setval('hogwarts.courses_id_seq', 5, true);



SELECT pg_catalog.setval('hogwarts.houses_id_seq', 4, true);



SELECT pg_catalog.setval('hogwarts.students_id_seq', 8, true);



SELECT pg_catalog.setval('hogwarts.teachers_id_seq', 5, true);



ALTER TABLE ONLY hogwarts.course_students
    ADD CONSTRAINT course_students_pkey PRIMARY KEY (course_id, student_id);



ALTER TABLE ONLY hogwarts.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);



ALTER TABLE ONLY hogwarts.houses
    ADD CONSTRAINT houses_name_key UNIQUE (name);



ALTER TABLE ONLY hogwarts.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);



ALTER TABLE ONLY hogwarts.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);



ALTER TABLE ONLY hogwarts.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);



\unrestrict 6prZxWIPTOXaC3rxWNho5Yiye5nmQmGFqj3bVx2oniQKt1MEm527ebNHEkdwrzV
