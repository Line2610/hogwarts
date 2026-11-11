import * as studentsRepository from "../repositories/students.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export async function getAllStudents(_request, response) {
  response.status(200).json(await studentsRepository.getAllStudents());
}

export async function getStudentById(request, response) {
  const student = await studentsRepository.getStudentById(request.params.id);
  if (student) {
    return response.status(200).json(student);
  }
  throw new HTTPError(404, "Student not found");
}

export async function createStudent(request, response) {
  const student = await studentsRepository.createStudent(request.body.name, request.body.house_id);
  response.status(201).json(student);
}

export async function updateStudent(request, response) {
  const student = await studentsRepository.updateStudent(request.params.id, request.body.name, request.body.house_id);
  if (!student) {
    throw new HTTPError(404, "Student not found");
  }
  response.status(200).json(student);
}

export async function deleteStudent(request, response) {
  const deleted = await studentsRepository.deleteStudent(request.params.id);
  if (!deleted) {
    throw new HTTPError(404, "Student not found");
  }
  response.sendStatus(204);
}
