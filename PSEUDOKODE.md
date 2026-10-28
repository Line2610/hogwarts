# Pseudokode

## GET /houses
Hent alle houses fra databasen og send dem med status 200.

## GET /houses/:id
Hent house med id fra databasen. Send 404 hvis den ikke findes, ellers house med 200.

## GET /teachers og GET /students
Hent alle henholdsvis teachers eller students og send listen med 200.

## GET /teachers/:id og GET /students/:id
Hent én person med id. Send 404 hvis personen ikke findes, ellers personen med 200.

## POST /teachers og POST /students
Læs name og house_id fra request body. Opret personen og send den nye person med 201.

## PUT /teachers/:id og PUT /students/:id
Læs name og house_id. Opdater personen med id. Send 404 hvis den ikke findes, ellers den opdaterede person med 200.

## DELETE /teachers/:id og DELETE /students/:id
Slet personen med id. Send 404 hvis den ikke findes, ellers 204.

## GET /courses
Hent alle courses fra databasen og send dem med status 200.

## GET /courses/:id
Hent course med id fra databasen. Send 404 hvis det ikke findes, ellers course med 200.

## POST /courses
Læs name og teacher_id. Opret et course og send det med 201.

## PUT /courses/:id
Læs name og teacher_id. Opdater course med id og send resultatet med 200.

## PUT /courses/:id/teacher
Læs teacher_id. Skift teacher på kurset og send kurset med 200.

## PUT /courses/:id/students/:studentId
Opret forbindelsen mellem course og studentId og send forbindelsen med 201.

## DELETE /courses/:id/students/:studentId
Fjern forbindelsen mellem course og student. Send 404 hvis forbindelsen ikke findes, ellers 204.

## DELETE /courses/:id
Slet course med id. Send 404 hvis det ikke findes, ellers 204.
