# Student Management App

This is a simple RESTful API built with Express.js and MongoDB for managing student records.

## Prerequisites

- Node.js installed
- MongoDB installed and running locally

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
npm start
```
4. The server will start on `http://localhost:3000`.

## API Endpoints

### Create a new student
- **POST** `/students`
Create a new student record.

### Read all students
- **GET** `/students`
Retrieve all student records.

### Read a single student
- **GET** `/students/:id`
Retrieve a student record by ID.

### Update a student
- **PATCH** `/students/:id`
Update a student record by ID.

### Delete a student by name
- **DELETE** `/students/name/:name`
Delete a student record by name.

## Dependencies

- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool
- body-parser: Middleware for parsing request bodies

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.
