// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,

  bio: { type: String, default: "" },
  skills: [String],

  profilePic: {
    type: String,
    default: "https://via.placeholder.com/100"
  },

  points: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);