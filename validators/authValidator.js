const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('username').isString().notEmpty(),//cheack username 
  body('email').isEmail(),//cheack email
  body('password').isLength({ min: 6 }),//password size
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const validateLogin = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);//this request valide or not cheack
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

module.exports = {
  validateRegister,
  validateLogin,
};
