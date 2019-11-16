const express = require('express');
const Patient = require('../models/Patient');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/patients/add', auth, async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();

    res.status(201).send();
  } catch (error) {
    if (error.name === 'ValidationError') {
      let resBody = {
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
      console.log('res', resBody);
    }

    /*if (e.name === 'ValidationError') {
      let errors = {};
      console.log(e);
      Object.values(e.errors).forEach(error => (errors[error.path] = error.message));
      res.status(422).send({ type: e.name, errors });
    } else {
      res.status(400).send({ type: 'GlobalError', errors: 'Unknown error occured' });
    }*/
    res.status(400).send(error);
  }
});

module.exports = router;
