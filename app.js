import express from "express";
import housesRoutes from "./routes/houses.routes.js";
import teachersRoutes from "./routes/teachers.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import coursesRoutes from "./routes/courses.routes.js";

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_request, response) => {
  response.send("Hogwarts API");
});

app.use("/houses", housesRoutes);
app.use("/teachers", teachersRoutes);
app.use("/students", studentsRoutes);
app.use("/courses", coursesRoutes);

app.use((error, _request, response, _next) => {
  console.error(error);

  if (error.code === "23503") {
    return response.status(400).json({ error: "Related item does not exist" });
  }
  if (error.code === "23505") {
    return response.status(409).json({ error: "Item already exists" });
  }
  if (error.code === "22P02") {
    return response.status(400).json({ error: "Invalid id" });
  }

  response.status(500).json({ error: "Database error", code: error.code });
});

app.listen(port, () => {
  console.log(`Hogwarts API listening on port ${port}`);
});
