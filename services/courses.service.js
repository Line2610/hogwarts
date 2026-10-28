import * as coursesRepository from "../repositories/courses.repository.js";

export function changeCourseTeacher(id, teacherId) {
  return coursesRepository.changeCourseTeacher(id, teacherId);
}

export function addStudentToCourse(courseId, studentId) {
  return coursesRepository.addStudentToCourse(courseId, studentId);
}

export function removeStudentFromCourse(courseId, studentId) {
  return coursesRepository.removeStudentFromCourse(courseId, studentId);
}
