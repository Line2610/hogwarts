import express from "express";
import errorhandler from "./errorhandling/Errorhandling.js";
import housesRoutes from "./routes/houses.routes.js";
import teachersRoutes from "./routes/teachers.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import coursesRoutes from "./routes/courses.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`server kører på http://localhost:${port}`);
});

app.use("/houses", housesRoutes);
app.use("/teachers", teachersRoutes);
app.use("/students", studentsRoutes);
app.use("/courses", coursesRoutes);

app.get("/", (_req, res) => {
  res.send("Hogwarts API");
});

app.use(errorhandler);
