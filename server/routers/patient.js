const express = require('express');
const Patient = require('../models/Patient');
//const auth = require('../middleware/auth');

const router = express.Router();

router.post('/patients/add', auth, async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).send(patient);
  } catch (error) {
    if (error.name === 'ValidationError') {
      let resBody = {
        type: error.name,
        notification: error._message,
        errors: {},
      };

      Object.values(error.errors).forEach(error => {
        switch (error.name) {
          case 'CastError': {
            resBody.errors[error.path] = 'Invalid data format';
            break;
          }

          case 'ValidatorError': {
            resBody.errors[error.path] = error.properties.type === 'user defined' ? error.message : 'Invalid field';
            break;
          }

          default:
            break;
        }
      });
      res.status(422).send(resBody);
    } else if (error.name === 'MongoError') {
      if (error.code === 11000) {
        // todo: check what field is duplicated
        // todo: check all required fields for duplicate
        console.log(error);
        res
          .status(400)
          .send({ type: 'DuplicateError', notification: 'Some fields already exist in database', errors: {} });
      }
    } else {
      res.status(400).send({ type: 'GlobalError', notification: 'Unknown error occured', errors: {} });
    }
  }
});

router.get('/patients/list', async (req, res) => {
  Patient.find({}, (err, patients) => {
    res.status(200).send(JSON.stringify(patients));
  });
});

module.exports = router;
