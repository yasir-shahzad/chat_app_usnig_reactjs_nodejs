# MERN Stack Web Application 🚀

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## 📚 Table of Contents
- [Overview](#overview)
- [Features](#features)
  - [Backend (API)](#backend-api)
  - [Frontend](#frontend)
- [Technologies Used](#technologies-used)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Installation](#installation)
- [License](#license)

---

## 📄 Overview
This web application is built using the **MERN stack** with cloud-based media storage and modern state management.

- Backend: **Node.js** + **Express.js** + **MongoDB**
- Frontend: **React.js** + **Tailwind CSS** + **Zustand**
- Media Storage: **Cloudinary**

The app supports full authentication, CRUD operations, responsive design, and role-based access control (RBAC).

---

## ✨ Features

### Backend (API)
- 🔒 **JWT Authentication & Authorization**
- 📋 **CRUD Operations** (Users, Data Management)
- 🛡️ **Role-Based Access Control (RBAC)**
- ☁️ **File Uploads to Cloudinary**
- 🔑 **Secure Password Hashing** (using Bcrypt.js)
- 🧹 **Middleware for Authentication & Validation**
- 🌐 **CORS Configuration** for secure API access

### Frontend
- 🎨 **Modern UI** with React.js & Tailwind CSS
- 📦 **State Management** with Zustand
- 📱 **Responsive and Interactive Design**
- 🔗 **Integration with RESTful API**
- 🧠 **Efficient Handling of Authentication and User Sessions**

---

## 🛠️ Technologies Used

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB ODM
- **JWT (JSON Web Token)** — Authentication system
- **Cloudinary** — Media storage service
- **Bcrypt.js** — Password hashing
- **Multer** — Middleware for file uploads
- **CORS** — Cross-origin resource sharing

### Frontend
- **React.js** — Frontend UI library
- **Tailwind CSS** — Utility-first CSS framework
- **Zustand** — Lightweight state management
- **Lucide-react** — Icon library

---

## ⚙️ Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2. Install dependencies for backend:
    ```bash
    cd backend
    npm install
    ```

3. Install dependencies for frontend:
    ```bash
    cd ../frontend
    npm install
    ```

4. Create a `.env` file for backend:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

5. Run backend and frontend:
    ```bash
    # In backend directory
    npm run dev
    # In frontend directory
    npm start
    ```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
