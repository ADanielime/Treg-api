require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const callRoutes = require("./routes/callRoutes");

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Use the call routes
app.use("/api/calls", callRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
app.get("/", (req, res) => {
    res.send("Treg API is running...");
  });
  