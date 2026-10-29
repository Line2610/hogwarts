import { Router } from "express";
import * as coursesController from "../controllers/courses.controller.js";

const coursesRouter = Router();

coursesRouter.get("/", coursesController.getAllCourses);
coursesRouter.get("/:id", coursesController.getCourseById);
coursesRouter.post("/", coursesController.createCourse);
coursesRouter.put("/:id", coursesController.updateCourse);
coursesRouter.put("/:id/teacher", coursesController.changeCourseTeacher);
coursesRouter.put("/:id/students/:studentId", coursesController.addStudentToCourse);
coursesRouter.delete("/:id/students/:studentId", coursesController.removeStudentFromCourse);
coursesRouter.delete("/:id", coursesController.deleteCourse);

export default coursesRouter;
