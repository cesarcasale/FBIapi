const Contact = require("../models/contact.model");



const createContact = async (req, res) => {
    try {
        const { Name, LastName, PhoneNumber, Email, Password } = req.body;
        const contact = new Contact({ Name, LastName, PhoneNumber, Email, Password });
        await contact.save();
        return res.status(201).json(contact);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json(contacts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { Name, LastName, PhoneNumber, Email, Password } = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(id, { Name, LastName, PhoneNumber, Email, Password }, { new: true });
        return res.status(200).json(updatedContact);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};



module.exports = {createContact, getAllContacts, updateContact, deleteContact}

