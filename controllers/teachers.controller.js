import * as teachersRepository from "../repositories/teachers.repository.js";

export async function getAllTeachers(_request, response, next) {
  try {
    response.status(200).json(await teachersRepository.getAllTeachers());
  } catch (error) {
    next(error);
  }
}

export async function getTeacherById(request, response, next) {
  try {
    const teacher = await teachersRepository.getTeacherById(request.params.id);
    if (!teacher) return response.sendStatus(404);
    response.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
}

export async function createTeacher(request, response, next) {
  try {
    const teacher = await teachersRepository.createTeacher(
      request.body.name,
      request.body.house_id,
    );
    response.status(201).json(teacher);
  } catch (error) {
    next(error);
  }
}

export async function updateTeacher(request, response, next) {
  try {
    const teacher = await teachersRepository.updateTeacher(
      request.params.id,
      request.body.name,
      request.body.house_id,
    );
    if (!teacher) return response.sendStatus(404);
    response.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
}

export async function deleteTeacher(request, response, next) {
  try {
    const deleted = await teachersRepository.deleteTeacher(request.params.id);
    if (!deleted) return response.sendStatus(404);
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
