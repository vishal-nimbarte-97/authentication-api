const authService = require('../services/authService');

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);//they are access the data into the browser or interface page
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { token } = await authService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
