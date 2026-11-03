# 🚀 DevCommunity
### Real-Time Knowledge Collaboration Portal for Technical University Students

DevCommunity is a web-based collaboration platform designed for technical university students. It provides a space where students can connect, share technical knowledge, publish posts, and communicate with one another in real time.

The project aims to encourage peer-to-peer learning, knowledge sharing, and collaboration among students interested in technology and development.

---

## ✨ Features

- **User Authentication:** Register and log in securely using password hashing and JWT authentication.
- **Create Posts:** Share technical knowledge, ideas, questions, and updates.
- **Community Feed:** View posts shared by other users.
- **Real-Time Chat:** Communicate with other users using Socket.IO.
- **Database Integration:** Store user information and posts using MongoDB.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML, CSS, JavaScript | Frontend |
| Node.js | Runtime environment |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| Socket.IO | Real-time communication |
| JWT | Authentication |
| bcryptjs | Password hashing |

---

## 📁 Project Structure

```text
DevCommunity/
│
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── post.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   └── index.html
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation and Setup

Follow these steps to run DevCommunity locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Archita090706/Devcommunity-.git
```

### 2. Navigate to the Project

```bash
cd Devcommunity-
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running locally.

The application uses the following default database connection:

```text
mongodb://127.0.0.1:27017/devcommunity
```

### 5. Start the Backend Server

```bash
node server.js
```

The backend server runs at:

```text
http://localhost:3000
```

### 6. Run the Frontend

Open the `frontend` folder in VS Code and launch `index.html` using the **Live Server** extension.

You can now register, log in, create posts, and explore the community chat.

---

## 🎯 Project Objectives

- Build a collaborative platform for technical university students.
- Encourage knowledge sharing and peer learning.
- Enable real-time communication.
- Gain practical experience in full-stack web development.
- Understand database integration, authentication, and client-server communication.

---

## 🔮 Future Improvements

- User profiles and profile customization.
- Like and comment functionality.
- Dedicated discussion spaces for different technical domains.
- Search and filtering of posts.
- Improved UI/UX and responsive design.
- Notifications and enhanced messaging features.

---

## 👩‍💻 Developer

**Archita**

B.Tech – Computer Science and Engineering

GitHub: [@Archita090706](https://github.com/Archita090706)

---

## 📌 Project Status

**Current Status:** MVP Developed

DevCommunity is an ongoing project, and additional features and improvements are planned.

---

⭐ If you find this project interesting, consider giving the repository a star!

**Build. Connect. Grow.** 🚀