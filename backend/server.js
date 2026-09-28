const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const path = require("path");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve frontend FIRST (important)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/auth", authRoutes);
app.use("/post", postRoutes);

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/devcommunity")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Socket setup
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", (msg) => {
    io.emit("receiveMessage", msg);
  });
});

// Server start
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});