import { Router } from "express";
import * as studentsController from "../controllers/students.controller.js";

const studentsRouter = Router();

studentsRouter.get("/", studentsController.getAllStudents);
studentsRouter.get("/:id", studentsController.getStudentById);
studentsRouter.post("/", studentsController.createStudent);
studentsRouter.put("/:id", studentsController.updateStudent);
studentsRouter.delete("/:id", studentsController.deleteStudent);

export default studentsRouter;
