const express = require("express");
const router = express.Router();

router.use("/contact", require("./contact"));
router.use("/appointment", require("./appointment"));

module.exports = router;
