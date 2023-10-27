const Appointment = require("../../models/appointment");

const createAnAppointment = async (req, res) => {
  try {
    const { title, time, date, contact } = req.body;
    const appointment = new Appointment({
      title,
      time,
      date,
      contact,
    });
    await appointment.save();
    console.log(appointment);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

module.exports = createAnAppointment;
