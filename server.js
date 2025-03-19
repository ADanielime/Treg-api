require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const callRoutes = require("./routes/callRoutes");

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Root Route
app.get("/", (req, res) => {
    res.send("✅ Treg API is running...");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Use API routes
app.use("/api/calls", callRoutes);

// Use Render's assigned port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
