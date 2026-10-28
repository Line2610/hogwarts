import * as studentsRepository from "../repositories/students.repository.js";

export async function getAllStudents(_request, response, next) {
  try {
    response.status(200).json(await studentsRepository.getAllStudents());
  } catch (error) {
    next(error);
  }
}

export async function getStudentById(request, response, next) {
  try {
    const student = await studentsRepository.getStudentById(request.params.id);
    if (!student) return response.sendStatus(404);
    response.status(200).json(student);
  } catch (error) {
    next(error);
  }
}

export async function createStudent(request, response, next) {
  try {
    const student = await studentsRepository.createStudent(
      request.body.name,
      request.body.house_id,
    );
    response.status(201).json(student);
  } catch (error) {
    next(error);
  }
}

export async function updateStudent(request, response, next) {
  try {
    const student = await studentsRepository.updateStudent(
      request.params.id,
      request.body.name,
      request.body.house_id,
    );
    if (!student) return response.sendStatus(404);
    response.status(200).json(student);
  } catch (error) {
    next(error);
  }
}

export async function deleteStudent(request, response, next) {
  try {
    const deleted = await studentsRepository.deleteStudent(request.params.id);
    if (!deleted) return response.sendStatus(404);
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
