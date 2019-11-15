const express = require('express');
const Patient = require('../models/Patient');

const router = express.Router();

router.post('/patients/add', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).send();
  } catch (e) {
    if (e.name === 'ValidationError') {
      let errors = {};
      Object.values(e.errors).forEach(error => (errors[error.path] = error.message));
      res.status(422).send({ type: e.name, errors });
    } else {
      res.status(400).send({ type: 'GlobalError', errors: 'Unknown error occured' });
    }
  }
});

module.exports = router;
