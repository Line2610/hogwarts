import pool from "../db.js";

export async function getAllStudents() {
  const result = await pool.query(
    "SELECT * FROM hogwarts.students ORDER BY id",
  );
  return result.rows;
}

export async function getStudentById(id) {
  const result = await pool.query(
    "SELECT * FROM hogwarts.students WHERE id = $1",
    [id],
  );
  return result.rows[0];
}

export async function createStudent(student) {
  const result = await pool.query(
    "INSERT INTO hogwarts.students (name, house_id) VALUES ($1, $2) RETURNING *",
    [student.name, student.house_id],
  );
  return result.rows[0];
}

export async function updateStudent(id, student) {
  const result = await pool.query(
    `UPDATE hogwarts.students
     SET name = $1, house_id = $2
     WHERE id = $3
     RETURNING *`,
    [student.name, student.house_id, id],
  );
  return result.rows[0];
}

export async function deleteStudent(id) {
  const result = await pool.query(
    "DELETE FROM hogwarts.students WHERE id = $1",
    [id],
  );
  return result.rowCount;
}
