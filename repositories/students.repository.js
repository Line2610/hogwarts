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

export async function createStudent(name, houseId) {
  const result = await pool.query(
    "INSERT INTO hogwarts.students (name, house_id) VALUES ($1, $2) RETURNING *",
    [name, houseId],
  );
  return result.rows[0];
}

export async function updateStudent(id, name, houseId) {
  const result = await pool.query(
    `UPDATE hogwarts.students
     SET name = $1, house_id = $2
     WHERE id = $3
     RETURNING *`,
    [name, houseId, id],
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
