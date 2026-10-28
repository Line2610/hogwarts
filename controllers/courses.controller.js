import * as coursesRepository from "../repositories/courses.repository.js";
import * as coursesService from "../services/courses.service.js";

export async function getAllCourses(_request, response, next) {
  try {
    response.status(200).json(await coursesRepository.getAllCourses());
  } catch (error) {
    next(error);
  }
}

export async function getCourseById(request, response, next) {
  try {
    const course = await coursesRepository.getCourseById(request.params.id);
    if (!course) return response.sendStatus(404);
    response.status(200).json(course);
  } catch (error) {
    next(error);
  }
}

export async function createCourse(request, response, next) {
  try {
    const course = await coursesRepository.createCourse(
      request.body.name,
      request.body.teacher_id,
    );
    response.status(201).json(course);
  } catch (error) {
    next(error);
  }
}

export async function updateCourse(request, response, next) {
  try {
    const course = await coursesRepository.updateCourse(
      request.params.id,
      request.body.name,
      request.body.teacher_id,
    );
    if (!course) return response.sendStatus(404);
    response.status(200).json(course);
  } catch (error) {
    next(error);
  }
}

export async function changeCourseTeacher(request, response, next) {
  try {
    const course = await coursesService.changeCourseTeacher(
      request.params.id,
      request.body.teacher_id,
    );
    if (!course) return response.sendStatus(404);
    response.status(200).json(course);
  } catch (error) {
    next(error);
  }
}

export async function addStudentToCourse(request, response, next) {
  try {
    const courseStudent = await coursesService.addStudentToCourse(
      request.params.id,
      request.params.studentId,
    );
    response.status(201).json(courseStudent);
  } catch (error) {
    next(error);
  }
}

export async function removeStudentFromCourse(request, response, next) {
  try {
    const deleted = await coursesService.removeStudentFromCourse(
      request.params.id,
      request.params.studentId,
    );
    if (!deleted) return response.sendStatus(404);
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

export async function deleteCourse(request, response, next) {
  try {
    const deleted = await coursesRepository.deleteCourse(request.params.id);
    if (!deleted) return response.sendStatus(404);
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
