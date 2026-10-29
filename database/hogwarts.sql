DROP SCHEMA IF EXISTS hogwarts CASCADE;
CREATE SCHEMA hogwarts;

CREATE TABLE hogwarts.houses (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL UNIQUE,
  color text NOT NULL,
  founder text NOT NULL
);

CREATE TABLE hogwarts.teachers (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  house_id integer NOT NULL REFERENCES hogwarts.houses(id)
);

CREATE TABLE hogwarts.students (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  house_id integer NOT NULL REFERENCES hogwarts.houses(id)
);

CREATE TABLE hogwarts.courses (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  teacher_id integer NOT NULL REFERENCES hogwarts.teachers(id)
);

CREATE TABLE hogwarts.course_students (
  course_id integer NOT NULL REFERENCES hogwarts.courses(id) ON DELETE CASCADE,
  student_id integer NOT NULL REFERENCES hogwarts.students(id) ON DELETE CASCADE,
  PRIMARY KEY (course_id, student_id)
);

INSERT INTO hogwarts.houses (name, color, founder) VALUES
  ('Gryffindor', 'Red and gold', 'Godric Gryffindor'),
  ('Ravenclaw', 'Blue and bronze', 'Rowena Ravenclaw'),
  ('Hufflepuff', 'Yellow and black', 'Helga Hufflepuff'),
  ('Slytherin', 'Green and silver', 'Salazar Slytherin');

INSERT INTO hogwarts.teachers (name, house_id) VALUES
  ('Minerva McGonagall', 1),
  ('Filius Flitwick', 2),
  ('Pomona Sprout', 3),
  ('Severus Snape', 4),
  ('Alastor Moody', 1);

INSERT INTO hogwarts.students (name, house_id) VALUES
  ('Harry Potter', 1),
  ('Hermione Granger', 1),
  ('Ron Weasley', 1),
  ('Luna Lovegood', 2),
  ('Albus Severus Potter', 4),
  ('Cedric Diggory', 3),
  ('Neville Longbottom', 1),
  ('Draco Malfoy', 4);

INSERT INTO hogwarts.courses (name, teacher_id) VALUES
  ('Transfiguration', 1), ('Charms', 2), ('Potions', 2), ('Defense Against the Dark Arts', 1);

INSERT INTO hogwarts.course_students (course_id, student_id) VALUES
  (1, 1), (1, 3), (2, 2);
