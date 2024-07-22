const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, "JWT_SECRET", (err, decoded) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

const authorize = (roles) => (req, res, next) => {
  console.log('User Role:', req.user.role); // Log the user's role
  console.log('Allowed Roles:', roles); // Log the allowed roles
  if (!roles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
  next();
};

module.exports = {
  authenticate,
  authorize,
};
