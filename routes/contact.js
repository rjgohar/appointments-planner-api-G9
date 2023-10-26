const express = require("express");
const contactRouter = express.Router();
const { createContact } = require("../controllers/contactus/index");

// api/contacts/
contactRouter.post("/", createContact);

module.exports = contactRouter;
