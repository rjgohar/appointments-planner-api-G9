const Contact = require("../../models/contact");

const createContact = async (req, res) => {
  try {
    const { userName, phoneNumber, email } = req.body;

    if (!userName || !phoneNumber)
      return res.status(403).json({
        message: "Invalid username or phoneNumber",
      });
    const contact = new Contact({
      userName: userName,
      phoneNumber,
      email,
    });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
};

module.exports = createContact;
