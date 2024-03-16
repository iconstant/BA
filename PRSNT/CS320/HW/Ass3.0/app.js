/*Try not to break anything please :)*/
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const { handleDataRequest } = require('./handlers/dataHandler'); // Import the function
// const { createUser } = require('./database-scripts/User/UserInsert');
const { handleLeaderboardRequest } = require('./handlers/leaderBoardHandler'); 

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url);


    // Handle POST requests
    if (req.method === 'POST' && req.url === '/html/signup.html') {
        console.log('Handling POST request for /signup.html');
        let data = '';

        // Collect data from the request
        req.on('data', (chunk) => {
            console.log('Data chunk received:', chunk);
            data += chunk;
        });

        // Process the collected data when the request ends
        req.on('end', async () => {
            try {
                // Parse the form data
                console.log('Received form data:', data);
                const formData = querystring.parse(data);
                console.log('Parsed form data:', formData);

                // Now 'formData' contains your user input
                const email = formData.email;
                const username = formData.username;
                const password = formData.password;
                const avatar = formData.avatar;

                // Move MongoDB operations here
              //  await createUser(username, password, email, avatar);

                // Respond to the client (modify this based on your needs)
                res.end('User signed up successfully!');
            } catch (error) {
                console.error('Error processing form data:', error);
                res.end('Internal Server Error');
            } finally {
                res.end();
            }
        });
    }
    
    // Handles the leaderboard get request
    if (req.method === 'GET' && req.url === '/leaderboard-data') {
        handleLeaderboardRequest(req, res);
        return; // End the request here to prevent further processing
    }

    // Handles the collection data get request
    if (req.method === 'GET' && req.url === '/collection-data') {
        handleDataRequest(req, res);
        filePath = path.join(__dirname, '/html/collection.html');
        return; // End the request here to prevent further processing
    }
    
    // If the URL is '/', serve Home.html
    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    }

    // Check if the requested file is within the html directory
    if (filePath.indexOf(__dirname) !== 0) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    // Read the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found!');
            } else {
                res.writeHead(500);
                res.end('Internal Server Error');
            }
        } else {
            // Determine the content type based on the file extension
            const ext = path.extname(filePath);
            let contentType = 'text/html'; // default to HTML
            switch (ext) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                // Add more cases for other file types if needed
            }

            // Set the appropriate content type
            res.setHeader('Content-Type', contentType);
            res.writeHead(200);
            res.end(data);
        }
    });
});

const PORT = 80;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
