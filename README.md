
## Endpoints

| Method | Route | Beskrivelse |
| --- | --- | --- |
| GET | `/houses` | Hent alle houses |
| GET | `/houses/:id` | Hent ét house |
| GET | `/teachers` | Hent alle teachers |
| GET | `/teachers/:id` | Hent én teacher |
| POST | `/teachers` | Opret teacher: `{ "name": "...", "house_id": 1 }` |
| PUT | `/teachers/:id` | Opdater teacher |
| DELETE | `/teachers/:id` | Slet teacher |
| GET | `/students` | Hent alle students |
| GET | `/students/:id` | Hent én student |
| POST | `/students` | Opret student |
| PUT | `/students/:id` | Opdater student |
| DELETE | `/students/:id` | Slet student |
| GET | `/courses` | Hent alle courses med id, name og teacher_id |
| GET | `/courses/:id` | Hent ét course med id, name og teacher_id |
| POST | `/courses` | Opret course: `{ "name": "...", "teacher_id": 1 }` |
| PUT | `/courses/:id` | Opdater course |
| PUT | `/courses/:id/teacher` | Skift teacher |
| PUT | `/courses/:id/students/:studentId` | Tilføj student til course |
| DELETE | `/courses/:id/students/:studentId` | Fjern student fra course |
| DELETE | `/courses/:id` | Slet course |

## Endpoint-tests i Bruno

I mappen hogwarts/ er testene. De åbenes i Bruno, hvor jeg starter med at køre npm start, og tester derefter endpoints én ad gangen. Jeg starter med GET for at finde ID’erne, og så derefter PUT og DELETE.

