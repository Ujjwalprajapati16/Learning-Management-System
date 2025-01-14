# LMS (Learning Management System) - MERN Stack

A robust Learning Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a clean and modern UI powered by ShadCN. The platform allows admins, instructors, and students to seamlessly manage and access courses, track progress, and enhance learning experiences.

## Features
- **Admin**: Manage users, courses, and track platform performance.
- **Instructor**: Create and upload course content, monitor student progress.
- **Student**: Enroll in courses, access content, and track progress.
- Secure authentication (JWT), role-based access control, and file uploads.
- Responsive and accessible design using ShadCN components.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, ShadCN UI.
- **Backend**: Node.js, Express.js, MongoDB.
- **Tools**: Redux, Axios, Multer, JWT.

## Folder Structure
- **client**: Contains the frontend code (React.js).
- **server**: Contains the backend code (Node.js, Express).

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Learning-Management-System .git
   cd Learning-Management-System 
   ```
2. Install dependencies:
   ```bash
   # Backend
   cd server && npm install

   # Frontend
   cd ../client && npm install
   ```
3. Set environment variables in a `.env` file (server):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the application:
   ```bash
   # Backend
   cd server
   npm start

   # Frontend
   cd ../client
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## License
This project is licensed under the MIT License.
