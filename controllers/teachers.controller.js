import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export async function getAllTeachers(_req, res) {
  res.status(200).json(await teachersRepository.getAllTeachers());
}

export async function getTeacherById(req, res) {
  const teacher = await teachersRepository.getTeacherById(req.params.id);
  if (teacher) {
    return res.status(200).json(teacher);
  }
  throw new HTTPError(404, "Teacher not found");
}

export async function createTeacher(req, res) {
  const teacher = await teachersRepository.createTeacher(req.body.name, req.body.house_id);
  res.status(201).json(teacher);
}

export async function updateTeacher(req, res) {
  const teacher = await teachersRepository.updateTeacher(req.params.id, req.body.name, req.body.house_id);
  if (!teacher) {
    throw new HTTPError(404, "Teacher not found");
  }
  res.status(200).json(teacher);
}

export async function deleteTeacher(req, res) {
  const deleted = await teachersRepository.deleteTeacher(req.params.id);
  if (!deleted) {
    throw new HTTPError(404, "Teacher not found");
  }
  res.sendStatus(204);
}
