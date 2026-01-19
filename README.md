Assignment 3 Report – Backend Migration to MongoDB

Student: Omar Moldir
Group: SE-2434
Project Topic: Real Estate Plarform
1. Topic Selection & Schema Design

Chosen Topic: Real Estate Plarform

Fields:

name (String, required)

description (String, required)

status (String, required)
 (available, sold, rented).

type (String, required)
(apartment, house, commercial).

price (Number, required)

location (String, required)

createdAt (Date, auto)

updatedAt (Date, auto)

2. Setup and Initialization
3. <img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 09 05 02" src="https://github.com/user-attachments/assets/e6a3a0d4-73e5-4108-b18f-0569e64da89f" />



3. API Endpoints
Method	Endpoint	Description
POST	/[objects]	mongodb new 
GET	/[objects]	getting all 
GET	/[objects]/:id	getting one 
PUT	/[objects]/:id	updating by id
DELETE	/[objects]/:id	deleting
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 09 03 41" src="https://github.com/user-attachments/assets/1695c40a-f55e-459d-9307-afd8e29896c0" />


Status Codes Used:

201 Created 
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 08 55 07" src="https://github.com/user-attachments/assets/e3c670b3-5ecf-4a6f-8dbb-2e6e2e9b99ff" />


200 OK 
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 08 55 50" src="https://github.com/user-attachments/assets/80957fa2-d3e3-4771-9501-798a96b22e5c" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 08 56 35" src="https://github.com/user-attachments/assets/cea8df1f-5b72-45e1-9354-2c8916b291fa" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 08 58 20" src="https://github.com/user-attachments/assets/8e83e304-ab15-4465-810f-cb915b99ea03" />
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 08 59 16" src="https://github.com/user-attachments/assets/7fc999e8-4e2c-40fc-8d66-dedba305b91e" />


404 Not Found 
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 08 59 54" src="https://github.com/user-attachments/assets/4c743df4-7c81-4f42-8627-39aa51699b78" />


400 Bad Request 
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 09 00 47" src="https://github.com/user-attachments/assets/00ccfe61-574c-4c73-ad4d-292c1ebc1383" />



5. Simple Interface (Front-End)
<img width="1440" height="900" alt="Снимок экрана 2026-01-19 в 09 01 59" src="https://github.com/user-attachments/assets/4eadbc5a-e6b0-4ab1-8a6c-047d3ba491a7" />



6. Code Organization

Structure:

server.js – main file

models/ – mongoose

routes/ – crud

controllers/ – logic

public/ – front

Middleware:

 express.json() for JSON-requests



Conclusion:
Assignment 3 успешно переведен с локального JSON-хранилища на MongoDB с поддержкой всех CRUD операций, валидацией, связями между объектами и минимальным фронтенд-интерфейсом для взаимодействия.
