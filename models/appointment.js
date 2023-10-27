const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
    title: { type: String, required: true },
    contact: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true } 
});

module.exports = model("appointment", appointmentSchema);