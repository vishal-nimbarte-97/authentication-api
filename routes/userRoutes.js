const express = require('express');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', authenticate, authorize(['admin']), userController.getAllUsers);
router.get('/:id', authenticate, authorize(['admin']), userController.getUserById);

module.exports = router;
