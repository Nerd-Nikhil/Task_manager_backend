# Task Manager Backend

A scalable RESTful API built with Node.js, Express.js, and MongoDB that powers the Task Manager application. The backend handles user authentication, task management, request validation, logging, and database operations.

## Live API

🔗 

---

## Features

- User Authentication & Authorization
- JWT-based Secure Authentication
- Password Hashing using Bcrypt
- Create, Read, Update, and Delete Tasks
- User-specific Task Management
- MongoDB Database Integration
- Request Validation using Express Validator
- API Logging using Morgan
- Centralized Logging using Winston
- CORS Enabled
- Custom Response Formatting
- Error Handling Middleware

---

## Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication & Security

- JSON Web Token (JWT)
- Bcrypt

### Validation

- Express Validator

### Logging & Monitoring

- Morgan
- Winston
- Express Winston

### Utilities

- dotenv
- cors
- http-status-codes

---

## Project Structure

```text
src/
│
├── auth/
│   ├── auth.router.js
│   ├── auth.controller.js
│   └── auth.service.js
│
├── users/
│   ├── user.route.js
│   ├── user.controller.js
│   └── user.model.js
│
├── tasks/
│   ├── tasks.router.js
│   ├── tasks.controller.js
│   └── tasks.model.js
│
├── middleware/
│   ├── responseFormatter.js
│   └── expresswinston.middleware.js
│
├── settings/
│   └── config.js
│
├── index.js
│
└── access.log
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Nerd-Nikhil/Task_manager_backend
```

### Navigate to Project

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

DATABASE_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will run on:

```text
http://localhost:5000
```

---

## API Modules

### Authentication

- Register User
- Login User
- Generate JWT Token

### Users

- Get User Profile
- Manage User Information

### Tasks

- Create Task
- Get All Tasks
- Update Task
- Delete Task
- Manage User-specific Tasks

---

## Logging

The application uses:

- Morgan for HTTP request logging
- Winston for application logging
- Access logs stored in:

```text
access.log
```

---

## Security Features

- JWT Authentication
- Password Hashing with Bcrypt
- Protected Routes
- Input Validation
- Environment Variable Configuration

---

## Deployment

### Backend Hosting

- Render

### Database Hosting

- MongoDB Atlas

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Start Production Server

```bash
npm start
```

### Staging

```bash
npm run staging
```

---

## Future Enhancements

- Task Priorities
- Due Dates
- Task Categories
- Pagination
- Team Collaboration
- Email Notifications
- Activity Tracking
- Refresh Token Authentication

---

## Frontend Repository

🔗 https://github.com/Nerd-Nikhil/Task_manager

---

## Author

**Nikhil Kumar**



---

