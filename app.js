// app.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL connection configuration
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Route to serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/add', (req, res) => {
    const task = req.body.task;

    if (!task) {
        res.send('Task cannot be empty!');
        return;
    }

    const query = "INSERT INTO tasks (task) VALUES ('r')";
    /*connection.query(query, [task], (err, result) => {
        if (err) throw err;
        console.log("Task added successfully");
        res.redirect('/');
    });*/
});

// Start the server
app.listen(port, () => {
    console.log(`Server running`);
});
