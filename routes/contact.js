const express = require("express");
const contactRouter = express.Router();
const {
  createContact,
  getContacts,
} = require("../controllers/contactus/index");

// api/contacts/
contactRouter.post("/", createContact);
contactRouter.get("/get-all", getContacts);

module.exports = contactRouter;
