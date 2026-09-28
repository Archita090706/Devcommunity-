const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* REGISTER */
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();

    res.json({ message: "User created" });
  } catch {
    res.status(400).json({ error: "User already exists" });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.json({ error: "Invalid credentials" });
  }

  res.json({ token: "dummy-token" });
});


//  GET USER PROFILE
router.get("/user/:username", async (req, res) => {
  const user = await User.findOne({ username: req.params.username });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});


//  UPDATE USER PROFILE
router.put("/user/:username", async (req, res) => {
  const { bio, skills } = req.body;

  const user = await User.findOneAndUpdate(
    { username: req.params.username },
    { bio, skills },
    { new: true }
  );

  res.json(user);
});


module.exports = router;