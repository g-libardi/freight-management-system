# [Frontend] Freight Management System

## Description
The frontend of the Freight Management System is a React application built on top of the Domain Driven Design (DDD) architecture. The app provides a simple interface to manage freights. The main page of the app is the only one implemented, the rest of the sections are fake for demonstration reasons. All the CRUD operations for freights are implemented.

## Installation and usage
### With Docker
1. Make sure you are in the directory of the frontend project.
2. Build the Docker image with `docker build -t freight-management-system-frontend .`.
3. Run the Docker container with `docker run -d -p <host>:<port>:8000 freight-management-system-frontend`.
4. The server should be running at `http://<host>:<port>`.

###With NPM
1. Make sure you are in the directory of the frontend project.
2. Install the dependencies with `npm install`.
3. Run in development mode with `npm run dev`.
4. Or, you can preview production mode with `npm run preview`.
5. The app should be running at `http://localhost:5173`.
