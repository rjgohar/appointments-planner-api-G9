const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  userName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
});

module.exports = model("contact", contactSchema);
