const { connectToDatabase } = require('../mongoConnection');


// This file is meant to handle a request for leaderboard data by connecting to the database,
// fetching user information from the 'UserInformation' collection,
// and responding to the client with the leaderboard data in JSON format.
// This function is called in app.js.

async function handleIDRequest(req, res) {
    console.log('Handling loginID request...');
    try {
        const db = await connectToDatabase();
        const userInformationCollection = db.collection('LoginID');

        // Fetch all documents from UserInformation collection
        const loginData = await userInformationCollection.find().toArray();

        // Send the data to the client
        res.end(JSON.stringify(loginData));
    } catch (error) {
        console.error('Error fetching LoginID data:', error);
        res.end('Internal Server Error');
    }
}

module.exports = {
    handleIDRequest,
};