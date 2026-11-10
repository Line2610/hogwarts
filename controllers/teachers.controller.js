import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "./errorhandling/HTTPError.js";

export async function getAllTeachers(_request, response) {
  response.status(200).json(await teachersRepository.getAllTeachers());
}

export async function getTeacherById(request, response) {
  const teacher = await teachersRepository.getTeacherById(request.params.id);
  if (teacher) {
    return res.status(200).json(teacher);
  }
  throw new HTTPError(404, "Teacher not found");
}

export async function createTeacher(request, response) {
  const teacher = await teachersRepository.createTeacher(request.body.name, request.body.house_id);
  response.status(201).json(teacher);
}

export async function updateTeacher(request, response) {
  const teacher = await teachersRepository.updateTeacher(request.params.id, request.body.name, request.body.house_id);
  if (!teacher) return response.sendStatus(404);
  response.status(200).json(teacher);
}

export async function deleteTeacher(request, response) {
  const deleted = await teachersRepository.deleteTeacher(request.params.id);

  if (success) {
    
  if (!deleted) return response.sendStatus(404);
  response.sendStatus(204);
}
