const { connectToDatabase } = require('../mongoConnection');


// This file is meant to handle a request for collection data by connecting to the database,
// fetching user information from the 'UserInformation' collection,
// and responding to the client with the collection data in JSON format.
// This function is called in app.js.

async function handleDataRequest(req, res) {
    console.log('Handling data request...');
    try {
        const db = await connectToDatabase();
        const dataCollection = db.collection('Items');

        // Fetch all documents from UserInformation collection
        const colData = await dataCollection.find().toArray();

        // Send the data to the client
        res.end(JSON.stringify(colData));
    } catch (error) {
        console.error('Error fetching data:', error);
        res.end('Internal Server Error');
    }
}

module.exports = {
    handleDataRequest,
};