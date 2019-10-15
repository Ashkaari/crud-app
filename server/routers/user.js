const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
  }
});

router.post('/users/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res.status(401).send({error: 'Login failed! Check your credentials!'});
    }

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

router.post('/users/me/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    await req.user.save();

    res.send()
  } catch (error) {
    res.status(500).send(error)
  }
});

router.post('/users/me/logoutall', auth, async (req, res) => {
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();

    res.send();
  } catch (error) {
    res.status(500).send(error)
  }
});

module.exports = router;