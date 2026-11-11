import * as coursesRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export async function getAllCourses(_request, response) {
  response.status(200).json(await coursesRepository.getAllCourses());
}

export async function getCourseById(request, response) {
  const course = await coursesRepository.getCourseById(request.params.id);
  if (!course) {
    throw new HTTPError(404, "Course not found");
  }
  response.status(200).json(course);
}

export async function createCourse(request, response) {
  const course = await coursesRepository.createCourse(
    request.body.name,
    request.body.teacher_id,
  );
  response.status(201).json(course);
}

export async function updateCourse(request, response) {
  const course = await coursesRepository.updateCourse(
    request.params.id,
    request.body.name,
    request.body.teacher_id,
  );
  if (!course) {
    throw new HTTPError(404, "Course not found");
  }
  response.status(200).json(course);
}

export async function changeCourseTeacher(request, response) {
  const course = await coursesRepository.changeCourseTeacher(
    request.params.id,
    request.body.teacher_id,
  );
  if (!course) {
    throw new HTTPError(404, "Course not found");
  }
  response.status(200).json(course);
}

export async function addStudentToCourse(request, response) {
  const courseStudent = await coursesRepository.addStudentToCourse(
    request.params.id,
    request.params.studentId,
  );
  response.status(201).json(courseStudent);
}

export async function removeStudentFromCourse(request, response) {
  const deleted = await coursesRepository.removeStudentFromCourse(
    request.params.id,
    request.params.studentId,
  );
  if (!deleted) {
    throw new HTTPError(404, "Student is not enrolled in course");
  }
  response.sendStatus(204);
}

export async function deleteCourse(request, response) {
  const deleted = await coursesRepository.deleteCourse(request.params.id);
  if (!deleted) {
    throw new HTTPError(404, "Course not found");
  }
  response.sendStatus(204);
}
