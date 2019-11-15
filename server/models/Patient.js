const mongoose = require('mongoose');
const validator = require('validator');

// todo: подумать про льготы
// todo: validation, creation_date (virtual ?)
const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  patronymic: {
    type: String,
    required: false,
    trim: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  birthdate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: 'Invalid Email address' });
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  snils: { type: Number, required: true, unique: true },
  oms: { type: Number, required: true, unique: true },
  passport: {
    number: { type: Number, required: true },
    serial: { type: Number, required: true },
    issued_on: { type: Date, required: true },
    issuing_company: { type: String, required: true },
    issuing_company_code: { type: String, required: true },
  },
  address: {
    postal_number: { type: Number, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    building: { type: String, required: true },
    apartment: { type: String, required: true },
  },
  job: {
    type: {
      company_name: { type: String, required: true },
      company_specialization: { type: String, required: false },
    },
    required: false,
  },

  discounts: {
    type: String,
    enum: ['senior', 'disabled', 'student', 'under16', 'none'],
  },
});

patientSchema.virtual('age').get(() => {
  return Math.floor((Date.now() - new Date(this.birthday).getTime()) / (1000 * 3600 * 24 * 365));
});

patientSchema.virtual('fullname').get(() => {
  return this.lastname + ' ' + this.name + ' ' + this.patronymic;
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
