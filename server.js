/* server.js, with mongodb API */
'use strict';
const log = console.log

// const express = require('express')
const port = process.env.PORT || 3000

// const app = express();
// const uri = process.env.MONGODB_URI;

// // mongoose and mongo connection
// const { mongoose } = require('./db/mongoose')
// mongoose.set('bufferCommands', false);  // don't buffer db requests if the db server isn't connected - minimizes http requests hanging if this is the case.
// const { seed } = require('./db/seed');

const express = require('express');
const path = require('path')


const app = express();
// Middleware to solve the CORS issue
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
})

app.use(express.static("static_files"));

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get(`/:id`, function (req, res){
    // res.send('id: ' + req.params.id);
    console.log(req.params.id)
    // res.send(req.params);
    res.sendFile(path.join(__dirname + '/pub/Display.html'));
});

// app.get('/display', (req, res) => {
//     res.sendFile(path.join(__dirname + '/pub/Display.html'));
// });

app.listen(port, () => {
    console.log('server is listening on port 3000');
});
