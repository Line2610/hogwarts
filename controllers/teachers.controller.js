import * as teachersRepository from "../repositories/teachers.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";
import UpdateTeacherDto from "../dtos/Updateteacher.dto.js";

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
  const teacher = await teachersRepository.createTeacher(req.body);
  res.status(201).json(teacher);
}

export async function updateTeacher(req, res) {
  const teacher = UpdateTeacherDto.parse(req.body);
  const updatedTeacher = await teachersRepository.updateTeacher(req.params.id, teacher);

  if (updatedTeacher) {
    return res.status(200).json(updatedTeacher);
  }

  throw new HTTPError(404, "No teacher to update");
}

export async function deleteTeacher(req, res) {
  const deleted = await teachersRepository.deleteTeacher(req.params.id);
  if (!deleted) {
    throw new HTTPError(404, "Teacher not found");
  }
  res.sendStatus(204);
}
