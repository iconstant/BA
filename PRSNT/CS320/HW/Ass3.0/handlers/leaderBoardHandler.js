const { connectToDatabase } = require('../mongoConnection');


// This file is meant to handle a request for leaderboard data by connecting to the database,
// fetching user information from the 'UserInformation' collection,
// and responding to the client with the leaderboard data in JSON format.
// This function is called in app.js.

async function handleLeaderboardRequest(req, res) {
    console.log('Handling leaderboard request...');
    try {
        const db = await connectToDatabase();
        const userInformationCollection = db.collection('UserInformation');

        // Fetch all documents from UserInformation collection
        const leaderboardData = await userInformationCollection.find().toArray();

        // Send the data to the client
        res.end(JSON.stringify(leaderboardData));
    } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        res.end('Internal Server Error');
    }
}

module.exports = {
    handleLeaderboardRequest,
};