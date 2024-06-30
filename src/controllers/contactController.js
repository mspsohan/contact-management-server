const { ContactModel, contactValidationSchema } = require('../model/contactModel');

// Create a new contact
const createContact = async (req, res) => {
   try {
      const { error } = contactValidationSchema.validate(req.body);
      if (error) {
         return res.status(400).send({ error: error.details[0].message });
      }

      // Create contact
      const contact = await ContactModel.create(req.body);
      res.status(201).send(contact);
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

// Get all contacts
const getAllContacts = async (req, res) => {
   try {
      const contacts = await ContactModel.find();
      res.status(200).send({ contacts });
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

// Get a single contact by ID
const getContactById = async (req, res) => {
   try {
      const contact = await ContactModel.findById(req.params.id);
      if (!contact) {
         return res.status(404).send({ error: 'Contact not found' });
      }
      res.status(200).send(contact);
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

// Update a contact by ID
const updateContact = async (req, res) => {
   try {
      const { error } = contactValidationSchema.validate(req.body);
      if (error) {
         return res.status(400).send({ error: error.details[0].message });
      }

      const contact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!contact) {
         return res.status(404).send({ error: 'Contact not found' });
      }
      res.status(200).send(contact);
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
   try {
      const contact = await ContactModel.findByIdAndDelete(req.params.id);
      if (!contact) {
         return res.status(404).send({ error: 'Contact not found' });
      }
      res.status(200).send({ data: {} });
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

module.exports = {
   createContact,
   getAllContacts,
   getContactById,
   updateContact,
   deleteContact,
};
