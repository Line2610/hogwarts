import * as studentsRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export async function getAllStudents(_req, res) {
  res.status(200).json(await studentsRepository.getAllStudents());
}

export async function getStudentById(req, res) {
  const student = await studentsRepository.getStudentById(req.params.id);
  if (student) {
    return res.status(200).json(student);
  }
  throw new HTTPError(404, "Student not found");
}

export async function createStudent(req, res) {
  const student = await studentsRepository.createStudent(req.body.name, req.body.house_id);
  res.status(201).json(student);
}

export async function updateStudent(req, res) {
  const student = await studentsRepository.updateStudent(req.params.id, req.body.name, req.body.house_id);
  if (!student) {
    throw new HTTPError(404, "Student not found");
  }
  res.status(200).json(student);
}

export async function deleteStudent(req, res) {
  const deleted = await studentsRepository.deleteStudent(req.params.id);
  if (!deleted) {
    throw new HTTPError(404, "Student not found");
  }
  res.sendStatus(204);
}
