const express = require("express");
const contactController = require("../controllers/contact.controller")
const router = express.Router()

router.post('/', contactController.createContact);
router.get('/', contactController.getAllContacts);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);



module.exports = router