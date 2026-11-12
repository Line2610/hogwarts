import pool from "../db.js";

export async function getAllTeachers() {
  const result = await pool.query(/*sql*/ `select teachers.id, teachers.name as teachers, houses.name as house from hogwarts.teachers
  left join hogwarts.houses
  on teachers.house_id = houses.id`);
  return result.rows;
}

export async function getTeacherById(id) {
  const result = await pool.query(
    /*sql*/ `
    select teachers.id, teachers.name 
    as teachers, houses.name 
    as house 
    from hogwarts.teachers
    left join hogwarts.houses
    on teachers.house_id = houses.id 
    WHERE teachers.id = $1`,
    [id],
  );
  return result.rows[0];
}

export async function createTeacher(name, houseId) {
  const result = await pool.query("INSERT INTO hogwarts.teachers (name, house_id) VALUES ($1, $2) RETURNING *", [name, houseId]);
  return result.rows[0];
}

export async function updateTeacher(id, name, houseId) {
  const result = await pool.query(
    `UPDATE hogwarts.teachers
     SET name = $1, house_id = $2
     WHERE id = $3
     RETURNING *`,
    [name, houseId, id],
  );
  return result.rows[0];
}

export async function deleteTeacher(id) {
  const result = await pool.query("DELETE FROM hogwarts.teachers WHERE id = $1", [id]);
  return result.rowCount;
}
