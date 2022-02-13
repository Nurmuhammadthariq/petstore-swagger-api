const req = require('express/lib/request');
const db = require('../config/db');

// Create User
const insertUser = (req, res) => {
  let data = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  };

  let insertQuery = `INSERT INTO user SET ?;`;

  db.query(insertQuery, data, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'Data has been inserted', data: data });
};

// Get all user
const getAllUsers = (req, res) => {
  let selectQuery = `SELECT id, username, firstname, lastname, email, phone FROM user`;
  db.query(selectQuery, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
};

// Get user By ID
const getUser = (req, res) => {
  let selectQueryById = `SELECT id, username, firstname, lastname, email, phone FROM user WHERE id = ?`;
  let id = req.params.id;

  db.query(selectQueryById, id, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
};

// Update user
const updateUser = (req, res) => {
	let dataEdit = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  };

  let id = req.params.id;

  let updateQuery = `UPDATE user SET ? WHERE id = ${id}`;
  db.query(updateQuery, dataEdit, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'Data has been updated', success: true });
}

// Delete user
const deleteUser = (req, res) => {
	let deleteQuery = `DELETE FROM user WHERE id = ?`;
  let id = [req.params.id];

  db.query(deleteQuery, id, function (err, deleted) {
    if (err) throw err;
  });
  res.send({ message: 'Data has been deleted' });
}

module.exports = { insertUser, getAllUsers, getUser, updateUser, deleteUser };
