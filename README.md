# Hogwarts Course Management API

## Start

1. Opret en PostgreSQL-database med navnet `hogwarts`.
2. Kopiér `.env.example` til `.env` og udfyld PostgreSQL-oplysningerne.
3. Åbn `database/hogwarts.sql` i pgAdmin Query Tool og kør hele filen.
4. Kør `npm install`.
5. Kør `npm start`.

Serveren starter på `http://localhost:3000`.

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

Mappen [`hogwarts/`](./hogwarts/) er en Bruno/OpenCollection-samling. Åbn mappen i Bruno, start serveren først med `npm start`, og send requests én ad gangen. Kør først GET-requests, så du kender id'erne, før du kører PUT og DELETE. Samlingen indeholder requests til alle endpoints, inklusive de ekstra course-endpoints.

## Mapper

- `routes`: URL'er og HTTP-metoder
- `controllers`: request og response
- `services`: ekstra logik
- `repositories`: SQL
