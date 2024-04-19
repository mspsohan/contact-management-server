const Joi = require('joi');
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String },
   telephone: { type: String, required: true },
   address: { type: String, required: true },
   img: { type: String, required: true },
}, { timestamps: true });

const ContactModel = mongoose.model('Contact', contactSchema);

// Joi schema for validation
const contactValidationSchema = Joi.object({
   name: Joi.string().required(),
   email: Joi.string().email(),
   telephone: Joi.string().required(),
   address: Joi.string().required(),
   img: Joi.string().required(),
});

module.exports = {
   ContactModel,
   contactValidationSchema,
};
