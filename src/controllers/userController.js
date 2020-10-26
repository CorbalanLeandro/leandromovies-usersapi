/* eslint-disable no-underscore-dangle */
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  create: async (req, res) => {
    const userToCreate = new User(req.body);
    userToCreate.password = bcryptjs.hashSync(req.body.password, 10);
    try {
      await userToCreate.save();
      res.status(201).json({ res: true });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500).json({ msg: error });
    }
  },
  // eslint-disable-next-line consistent-return
  login: async (req, res) => {
    try {
      const userToLogin = await User.findOne({ username: req.body.username }, '_id username');
      if (userToLogin) {
        const token = jwt.sign({ id: userToLogin._id }, process.env.JWTSECRET);
        return res.status(200).json({ user: userToLogin, token });
      }
      return res.status(406).json({ msg: 'No user found' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500).json({ msg: error });
    }
  },
};
