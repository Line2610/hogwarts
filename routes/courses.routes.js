import { Router } from "express";
import * as coursesController from "../controllers/courses.controller.js";

const router = Router();

router.get("/", coursesController.getAllCourses);
router.get("/:id", coursesController.getCourseById);
router.post("/", coursesController.createCourse);
router.put("/:id", coursesController.updateCourse);
router.put("/:id/teacher", coursesController.changeCourseTeacher);
router.put("/:id/students/:studentId", coursesController.addStudentToCourse);
router.delete("/:id/students/:studentId", coursesController.removeStudentFromCourse);
router.delete("/:id", coursesController.deleteCourse);

export default router;
