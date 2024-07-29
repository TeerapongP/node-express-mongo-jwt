const authService = require('../services/authService');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await authService.registerUser(username, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await authService.loginUser(username, password);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
