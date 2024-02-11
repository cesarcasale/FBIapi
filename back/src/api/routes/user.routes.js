//4to creamos la ruta

const express = require("express");
const {newUser} = require("../controllers/user.controller")

const router = express.Router()

router.get("/:id", newUser)
router.post("/register", newUser)

module.exports = router