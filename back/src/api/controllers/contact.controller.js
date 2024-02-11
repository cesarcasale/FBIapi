const Contact = require("../models/contact.model");

const newContact = async(req, res) => {
    try {
        const body = req.body;
        const contact = new Contact(body);
       // const createdContact = await contact.save();
        return res.json(contact)
    } catch (error) {
        return res.json(error)
    }
}


module.exports = {newContact}

