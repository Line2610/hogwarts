import pool from "../db.js";

export async function getAllCourses() {
  const result = await pool.query(
    "SELECT * FROM hogwarts.courses ORDER BY id",
  );
  return result.rows;
}

export async function getCourseById(id) {
  const result = await pool.query(
    "SELECT * FROM hogwarts.courses WHERE id = $1",
    [id],
  );
  return result.rows[0];
}

export async function createCourse(name, teacherId) {
  const result = await pool.query(
    "INSERT INTO hogwarts.courses (name, teacher_id) VALUES ($1, $2) RETURNING *",
    [name, teacherId],
  );
  return result.rows[0];
}

export async function updateCourse(id, name, teacherId) {
  const result = await pool.query(
    `UPDATE hogwarts.courses
     SET name = $1, teacher_id = $2
     WHERE id = $3
     RETURNING *`,
    [name, teacherId, id],
  );
  return result.rows[0];
}

export async function changeCourseTeacher(id, teacherId) {
  const result = await pool.query(
    "UPDATE hogwarts.courses SET teacher_id = $1 WHERE id = $2 RETURNING *",
    [teacherId, id],
  );
  return result.rows[0];
}

export async function addStudentToCourse(courseId, studentId) {
  const result = await pool.query(
    `INSERT INTO hogwarts.course_students (course_id, student_id)
     VALUES ($1, $2)
     RETURNING *`,
    [courseId, studentId],
  );
  return result.rows[0];
}

export async function removeStudentFromCourse(courseId, studentId) {
  const result = await pool.query(
    `DELETE FROM hogwarts.course_students
     WHERE course_id = $1 AND student_id = $2`,
    [courseId, studentId],
  );
  return result.rowCount;
}

export async function deleteCourse(id) {
  const result = await pool.query(
    "DELETE FROM hogwarts.courses WHERE id = $1",
    [id],
  );
  return result.rowCount;
}
