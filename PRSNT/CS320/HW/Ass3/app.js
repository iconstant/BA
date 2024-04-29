/*Try not to break anything please :)*/
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const express = require('express');//

const { handleDataRequest } = require('./handlers/Items_dataHandler'); // Import the function
// const { createUser } = require('./database-scripts/User/UserInsert');
const { handleIDRequest } = require('./handlers/ID_dataHandler');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url);
    express().set('view engine', 'ejs');//

    // Handles the leaderboard get request
    if (req.method === 'GET' && req.url === '/ID-data') {
        handleIDRequest(req, res);
        return; // End the request here to prevent further processing
    }

    // Handles the collection data get request
    if (req.method === 'GET' && req.url === '/collection-data') {
        filePath = path.join(__dirname, './html/collection.html');
        handleDataRequest(req, res);
        return; // End the request here to prevent further processing
    }

    // app.get('/collection-data', async (req, res) => {
    //     handleDataRequest(req, res);
    // })

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
