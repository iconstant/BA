// This file sets up the connection between this project folder and our database
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/Assgn3';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db(); // Return the database instance
  } catch (err) {
    console.error('Error connecting to the database', err);
    throw err;
  }
}

module.exports = { connectToDatabase, client };
