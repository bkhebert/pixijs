const mongodb = require('mongodb')
const mongoose = require('mongoose')

const dbURI = 'mongodb://localhost:27017/pixitest';

mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));