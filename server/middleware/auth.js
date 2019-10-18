const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : '';
  if (!token) {
    res.status(403).send({ error: 'No token provided' });
  }

  await jwt.verify(token, process.env.JWT_KEY, async (err, entity) => {
    if (err) {
      res.status(401).send({ error: 'Not authorized to access this resource' });
    } else {
      await User.findOne({ _id: entity._id, 'tokens.token': token }).then(user => {
        if (!user) {
          res.status(401).send({ error: 'Not authorized to access this resource' });
        } else {
          req.user = user;
          req.token = token;
          next();
        }
      });
    }
  });
};

module.exports = auth;
