# Authentication System - Node.js, Express.js, MongoDB

## Overview
This project is a backend application built with Node.js, Express.js, and MongoDB for handling user authentication. The application consists of two key forms: a login form and a registration form. In version 2, advanced features such as "Remember Me," "Forgot Password," and password update via OTP request were introduced.

## Features
### Basic Features (Version 1)
- **Registration Form:**
  - Name
  - Email
  - Password

- **Login Form:**
  - Email
  - Password

### Advanced Features (Version 2)
- **Remember Me:** Stay logged in after closing the browser.
- **Forgot Password:** Request a password reset via email using a 6-digit OTP.
- **Update Password:** Securely update your password through OTP verification.
  
### Security Implementations
- **Password Hashing:** Passwords are hashed using bcrypt before storing them in the MongoDB database.
- **JWT Authentication:** JSON Web Tokens (JWT) are used for secure session management. Authentication middleware is implemented to verify token validity for protected routes.
- **Error Handling:** Custom error handler middleware is integrated to catch and handle any runtime errors gracefully.

## Routes
- `/auth`: Handles all authentication-related routes such as login, register, and password reset.
- `/home`: Protected route that is accessible only after successful authentication.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Frontend:** HTML, CSS, JavaScript
- **Security:** bcrypt, JWT

## Installation & Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js:** [Download & Install Node.js](https://nodejs.org)
- **MongoDB Account:** Create a MongoDB account and set up a cluster [here](https://www.mongodb.com/cloud/atlas).

### Steps

1. **Clone the Repository:**
   Clone the project repository to your local machine using the following command:
   ```bash
   git clone <repository-url>
   cd <repository-name>
2. **Create these variables in .env file:**

   SECRET_KEY: A secret key used for JWT signing.

   JWT_LIFETIME: The expiration time for JWT tokens (e.g., 1d, 7d).

   MONGO_URI: The URI for connecting to your MongoDB database.
3. **Instructions to Obtain MONGO_URI**

    Go to MongoDB Atlas and log in.

    Create a new cluster (or use an existing one).

    Click the Connect button for your cluster.

    Choose Connect your application.

    Copy the connection string 

    Replace "username", "password", and "dbname" with your credentials and database name.

**Important:** Make sure to replace <password> with your actual database password and do not include angle brackets.

4. **Install Dependencies:** npm install

5. **Start the Server:** npm start 
