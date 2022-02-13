const db = require('../config/db');
const mysql = require('mysql');

// Insert Pet
const insertPets = (req, res) => {
  let data = {
    nama: req.body.nama,
    category: req.body.category,
    status: req.body.status,
  };
  if (!data.nama ) {
    res.send({ message: 'name is required' })
  } else {

    let insertQuery = `INSERT INTO pet SET ?;`;
  
    db.query(insertQuery, data, function (error, results, fields) {
      if (error) throw error;
    });
    res.send({ message: 'Data has been inserted', data: data });
  }
};

// Get all pets
const getAllPets = (req, res) => {
  let selectQuery = `SELECT * FROM pet`;
  db.query(selectQuery, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
};

// Get pet by id
const getPetById = (req, res) => {
  let selectQueryById = `SELECT * FROM pet WHERE id = ?`;
  let id = req.params.id;

  db.query(selectQueryById, id, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
};

// Update pet
const updatePet = (req, res) => {
  let dataEdit = {
    nama: req.body.nama,
    category: req.body.category,
    status: req.body.status,
  };

  let id = req.params.id;

  let updateQuery = `UPDATE pet SET ? WHERE id = ${id}`;
  db.query(updateQuery, dataEdit, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'Data has been updated', success: true });
};

// Deleted Pet
const deletePet = (req, res) => {
  let deleteQuery = `DELETE FROM pet WHERE id = ?`;
  let data = [req.params.id];

  db.query(deleteQuery, data, function (err, deleted) {
    if (err) throw err;
  });
  res.send({ message: 'Data has been deleted' });
};

module.exports = {
  getAllPets,
  insertPets,
  updatePet,
  getPetById,
  deletePet,
};
