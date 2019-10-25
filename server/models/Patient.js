const mongoose = require('mongoose');
const validator = require('validator');

// DONE: фио, пол, дата рождения, телефон, почта, возраст (виртуальное свойство), паспортные данные, адрес регистрации
// снилс, полис омс, дата заполнения карты, иесто работы

// todo: подумать про льготы
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
  passport: {
    number: { type: Number, required: true },
    series: { type: Number, required: true },
    issued_on: { type: Date, required: true },
    issued_organization: {
      name: { type: String, required: true },
      code: { type: String, required: true },
    },
  },
  address: {
    index: { type: Number, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    building: { type: String, required: true },
    apartment: { type: String, required: true },
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
