const User = require('../models/user');

const getAllUsers = async () => {
  return User.findAll();
};

const getUserById = async (id) => {
  return User.findByPk(id);
};

module.exports = {
  getAllUsers,
  getUserById,
};
