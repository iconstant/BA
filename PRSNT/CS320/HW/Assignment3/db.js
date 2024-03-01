const { MongoClient } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017/webappproject';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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



// old
// let dbConnection

// module.exports = { // connect to database
//     connectToDb: (cb) => {
//         MongoClient.connect('mongodb://localhost:27017/Assgn1')
//         .then(client => {
//             dbConnection = client.db()
//             return cb()
//         })
//         .catch(err => {
//             console.log(err)
//             return cb(err)
//         })
//     }, 
//     getDb: () => dbConnection // return database connection to communicate w/ database
// }