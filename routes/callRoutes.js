const express = require("express");
const CallLog = require("../models/CallLog");
const router = express.Router();

// Add a new call log
router.post("/log", async (req, res) => {
    try {
        const call = new CallLog(req.body);
        await call.save();
        res.status(201).json({ message: "Call log saved", data: call });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all call logs
router.get("/logs", async (req, res) => {
    try {
        const logs = await CallLog.find();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a call log
router.delete("/log/:id", async (req, res) => {
    try {
        await CallLog.findByIdAndDelete(req.params.id);
        res.json({ message: "Call log deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
