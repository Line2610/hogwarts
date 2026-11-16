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

export async function createTeacher(teacher) {
  const result = await pool.query(
    /*sql*/ `INSERT INTO hogwarts.teachers (name, house_id) 
    VALUES ($1, $2) RETURNING id`,
    [teacher.name, teacher.house_id],
  );

  return getTeacherById(result.rows[0].id);
}

export async function updateTeacher(id, teacher) {
  const result = await pool.query(
    /*sql*/ `UPDATE hogwarts.teachers
     SET name = $1, house_id = $2
     WHERE id = $3
     RETURNING id`,
    [teacher.name, teacher.house_id, id],
  );

  if (result.rowCount === 0) return null; // Teacher not found

  const updatedTeacher = result.rows[0].id;

  return getTeacherById(updatedTeacher); // Fetch the updated teacher with house name
}

export async function deleteTeacher(id) {
  const result = await pool.query("DELETE FROM hogwarts.teachers WHERE id = $1", [id]);
  return result.rowCount;
}
