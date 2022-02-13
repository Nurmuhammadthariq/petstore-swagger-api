const express = require('express');
const router = express.Router();
const {
  insertUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controller/userController');
const { runValidation, validationUser } = require('../validation');

router
  .route('/')
  .get(getAllUsers)
  .post(validationUser, runValidation, insertUser);
router.route('/:id').get(getUser);
router.route('/:id').put(validationUser, runValidation, updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;
