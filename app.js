const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');

//Routes
const petRoutes = require('./routes/petRoutes');
const userRoutes = require('./routes/userRoutes')
const storeRoutes = require('./routes/storeRoutes');

// use express json
app.use(express.json());

// Testing db connection
try {
  db.connect(function (err) {
    if (err) throw err;
    console.log('Database connected is works');
  });
} catch (error) {
  console.log('Unable to connect to the database:', error);
}

app.use('/api/pets', petRoutes);
app.use('/api/users', userRoutes);
app.use('/api/store', storeRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
