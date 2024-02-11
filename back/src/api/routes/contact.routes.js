const express = require("express");
const {newContact} = require("../controllers/contact.controller")

const router = express.Router()

router.post("/register", newContact)

module.exports = router