# [Backend] Freight Management System

## Description
The backend of the Freight Management System is a RESTful API that provides endpoints for managing the system's data. The API is built using FastAPI with asyncpg for database access.

## Installation and Usage
### With UV package manager
1. Make sure you are in the directory of the backend project.
2. Install the dependencies with `uv sync`.
3. Run the server with `uv run fastapi run`.
4. The server should be running at `http://localhost:8000`.
5. You can access the API documentation at `http://localhost:8000/docs`.

### With PIP
1. Make sure you are in the directory of the backend project.
2. Install the dependencies with `pip install -r requirements.txt`.
3. Run the server with `fastapi run <host>:<port>`.
4. The server should be running at `http://<host>:<port>`.
5. You can access the API documentation at `http://<host>:<port>/docs`.

### With Docker
1. Make sure you are in the directory of the backend project.
2. Build the Docker image with `docker build -t freight-management-system-backend .`.
3. Run the Docker container with `docker run -d -p <host>:<port>:8000 freight-management-system-backend`.
4. The server should be running at `http://<host>:<port>`.

## Entities
| Entity | Fields |
| --- | --- |
| User | id, name, username, password |
| Carrier | id, name |
| Driver | id, name, id_carrier |
| Vehicle Type | id, name |
| Freight Status | id, name |
| Freight | id, id_driver, id_vehicle_type, id_freight_status, origin, destination, departure_date, arrival_date |

## Endpoints
_For full documentation, visit the [API documentation]() !TODO_
| Method | Path | Description |
| --- | --- | --- |
| **Freight** | | |
| GET    | /freight        | List all freights          |
| GET    | /freight/{id}   | Get a freight by id        |
| POST   | /freight        | Create a new freight       |
| PUT    | /freight/{id}   | Update a freight by id     |
| DELETE | /freight/{id}   | Delete a freight by id     |
| **Carrier** | | |
| GET    | /carrier        | List all carriers          |
| **Driver** | | |
| GET    | /driver         | List all drivers           |
| **Vehicle Type** | | |
| GET    | /vehicle-type   | List all vehicle types     |
| **Freight Status** | | |
| GET    | /freight-status | List all freight statuses  |
| **Auth Session** | | |
| POST   | /auth/session   | Create a new session       |
| DELETE | /auth/session   | Delete the current session |
