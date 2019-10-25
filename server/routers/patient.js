const express = require('express');
const Patient = require('../models/Patient');

const router = express.Router();

router.post('/patients/add', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
