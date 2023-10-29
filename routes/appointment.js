const express = require("express");
const appointmentRouter = express.Router();
const {
  createAnAppointment,
  getAppointment,
} = require("../controllers/appointment/index");

appointmentRouter.post("/create", createAnAppointment);
appointmentRouter.get("/get-all", getAppointment);

module.exports = appointmentRouter;
