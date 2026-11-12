import * as coursesRepository from "../repositories/courses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export async function getAllCourses(_req, res) {
  res.status(200).json(await coursesRepository.getAllCourses());
}

export async function getCourseById(req, res) {
  const course = await coursesRepository.getCourseById(req.params.id);
  if (!course) {
    throw new HTTPError(404, "Course not found");
  }
  res.status(200).json(course);
}

export async function createCourse(req, res) {
  const course = await coursesRepository.createCourse(
    req.body.name,
    req.body.teacher_id,
  );
  res.status(201).json(course);
}

export async function updateCourse(req, res) {
  const course = await coursesRepository.updateCourse(
    req.params.id,
    req.body.name,
    req.body.teacher_id,
  );
  if (!course) {
    throw new HTTPError(404, "Course not found");
  }
  res.status(200).json(course);
}

export async function changeCourseTeacher(req, res) {
  const course = await coursesRepository.changeCourseTeacher(
    req.params.id,
    req.body.teacher_id,
  );
  if (!course) {
    throw new HTTPError(404, "Course not found");
  }
  res.status(200).json(course);
}

export async function addStudentToCourse(req, res) {
  const courseStudent = await coursesRepository.addStudentToCourse(
    req.params.id,
    req.params.studentId,
  );
  res.status(201).json(courseStudent);
}

export async function removeStudentFromCourse(req, res) {
  const deleted = await coursesRepository.removeStudentFromCourse(
    req.params.id,
    req.params.studentId,
  );
  if (!deleted) {
    throw new HTTPError(404, "Student is not enrolled in course");
  }
  res.sendStatus(204);
}

export async function deleteCourse(req, res) {
  const deleted = await coursesRepository.deleteCourse(req.params.id);
  if (!deleted) {
    throw new HTTPError(404, "Course not found");
  }
  res.sendStatus(204);
}
