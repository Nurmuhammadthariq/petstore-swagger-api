const express = require('express');
const router = express.Router();
const {
  getAllPets,
  insertPets,
  updatePet,
  getPetById,
  deletePet,
} = require('../controller/petController');

router.route('/').get(getAllPets).post(insertPets);
router.route('/:id').get(getPetById);
router.route('/:id').put(updatePet);
router.route('/:id').delete(deletePet);

module.exports = router;
