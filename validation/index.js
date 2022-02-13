const { check, validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      status: false,
      message: errors.array()[0].msg,
    });
  }
  next();
};

exports.validationUser = [
  check('username', 'Username cannot be empty').notEmpty(),
  check('firstname', 'Firstname cannot be empty').notEmpty(),
  check('lastname', 'Lastname cannot be empty').notEmpty(),
  check('email', 'Invalid email')
    .notEmpty()
    .isEmail()
    .withMessage('Email must be contain @'),
  check('password', 'Password cannot be empty').notEmpty(),
];
