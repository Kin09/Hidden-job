const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("DB Connection Error:", err));

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

// ✅ Add this root route
app.get("/", (req, res) => {
  res.send("Welcome to the Job Tracker API!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
