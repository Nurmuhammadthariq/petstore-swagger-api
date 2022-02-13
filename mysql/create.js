const db = require('../config/db');

let createQuery = `
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(25) NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    phone VARCHAR(25) NOT NULL,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`;

let createQueryOrder = `
CREATE TABLE IF NOT EXISTS store (
    id INT NOT NULL AUTO_INCREMENT,
    petId INT NOT NULL,
    quantity INT NULL,
    shipdate VARCHAR(25) NULL,
    status VARCHAR(25) NULL,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`;

db.query(createQueryOrder, function (error, results, fields) {
  if (error) throw error;
  console.log('Table has been created');
});

db.end();
