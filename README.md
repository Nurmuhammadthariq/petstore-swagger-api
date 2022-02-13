# Pet Store Api based petsore.swagger.io
Pet Store API is a Day30 Assignment from Dibimbing course in the form API server for pet store web application based on [petstore.swagger.io](https://petstore.swagger.io/#/) API documentation. This project uses [ExpressJs](https://www.npmjs.com/package/express) framework and MySQL as the database and express validator to Validate request

## Installation
In the root project directory run `npm install` on your terminal.


## Database configuration
There are ways how to setup the database configuration. You can choose one of the methods below:

###### This ways
- First of all you have to do is install MySQL database on your computer 
- excecute file **./mysql/create.js** file into your MySQL Database with command **node create.js** in your terminal. It will automatically create new schema named "petstore_swagger" with its tables and datas.
- Open **dbConnection.js** in the **./config/** directory and you will see the following code:

```javascript
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "YOUR_MYSQL_HOST", // "localhost" by default
  user: "YOUR_MYSQL_USER", // "root" by default
  password: "YOUR_MYSQL_PASSWORD",
  database: "petstore_swagger",
});
module.exports = db;
```
- Change value of **host**, **user** and **password** to your MySQL configuration.

## Run the app
- In the root directory you can run `npm start` on your terminal.
- The server uses port: `3000` and it will be running on [http://localhost:3000](http://localhost:3000).

## Usage
The use of the API in this application is divided into 3 groups, namely pet, store and user. How to access the API is as follows:

### Pet
- #### Get all pets data
  `GET` `http://localhost:3000/api/pets/`

  *Parameters:* none
- #### Get pet data by id
  `GET` `http://localhost:3000/api/pets/4`

  *parameters:* query
- #### Add new pet data
  `POST` `http://localhost:3000/api/pets/`

  *parameters:* body
  - `name` integer *required
  - `category` string *required
  - `status` integer *required

- #### Update exiting pet data
  `PUT` `http://localhost:3000/api/pets/2`

  *parameters:* body
  - `id` integer *required
  - `name` integer *required 
  - `category` string *required
  - `status` string *required (choose between "available" or "sold")

- #### Delete exiting pet data
  `DELETE` `http://localhost:3000/api/pets/5`

  *parameters:* path
  - `id` integer *required