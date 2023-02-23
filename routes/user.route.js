const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controllers")

// Create a new user
router.post('/', UserController.createUser);

// Retrieve all users
router.get('/', UserController.getAllUsers);

// Retrieve a single user by id
router.get('/:id', UserController.getUserById);


module.exports = router;
