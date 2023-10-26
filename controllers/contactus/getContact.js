const Contact = require("../../models/contact");
const getContacts = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).send({ contact });
  } catch (err) {
    res.status(500).json({ message: err.message || " contact not found" });
  }
};
module.exports = getContacts;
