const appointment = require("../../models/contact");
const getAppointment = async (req, res) => {
  try {
    const appointmentData = await appointment.find({});
    res.status(200).send({ appointmentData });
  } catch (err) {
    res.status(500).json({ message: err.message || " contact not found" });
  }
};
module.exports = getAppointment;