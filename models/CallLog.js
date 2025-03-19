const mongoose = require("mongoose");

const callLogSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true },
    direction: { type: String, enum: ["incoming", "outgoing"], required: true },
    timestamp: { type: Date, default: Date.now },
    duration: { type: Number, required: true }, // Duration in seconds
    status: { type: String, enum: ["answered", "missed", "voicemail"], required: true }
});

module.exports = mongoose.model("CallLog", callLogSchema);
