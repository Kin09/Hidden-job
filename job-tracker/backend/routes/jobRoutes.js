const express = require("express");
const axios = require("axios");
const Job = require("../models/Job");

const router = express.Router();

router.get("/recommendations", async (req, res) => {
  try {
    const response = await axios.get("https://api.example.com/job-recommendations");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching job recommendations" });
  }
});

module.exports = router;
