//require all the things that we need for the server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configures so that we can have our environment variables in the dotenv file
require('dotenv').config();

//this is how we are going to create the express server and show the port 
const app = express();
const port = process.env.port || 5000;

//connection to MongoDB database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
})

//middleware to allow us to part JSON because our server will send and receive JSON
app.use(cors());
app.use(express.json());

//telling server to use specific files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//this starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});