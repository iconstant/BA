const express = require('express')
const { connectToDatabase, client } = require('./db')

// initialize app & middleware
const app = express()

// db connection
let db

connectToDatabase((err) => {
    if (!err) {
        app.listen('3000', () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})

// routes
app.get('/Logins', (req, res) => {
    let logins = []

    db.collection('Logins')
        .find() // cursor/ptr toArray forEach
        .sort({ Login_ID: 1 }) // cursor
        .forEach(Login_ID => logins.push(Login_ID))
        .then(() => {
            res.status(200).json(logins)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch documents' })
        })
})