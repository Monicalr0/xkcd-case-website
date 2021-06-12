'use strict';

const port = process.env.PORT || 3000

const express = require('express');
const path = require('path')
const cors = require('cors')
const fetch = require('node-fetch')

let counter = Array(2475).fill(0)

const app = express();

// Middleware to solve the CORS issue
app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.static("static_files"));
app.use(express.static(path.join(__dirname, '/pub')))
app.use(cors())
const corsOption = {
    origin: "http://localhost:3000"
}

app.get('/getData/:id(\\d+)', cors(corsOption),async(req, res) =>{
    const fetchOptions = {
        method: 'GET'
    }
    const requestEndpoint = 'https://xkcd.com/' + req.params.id + '/info.0.json'
    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pub/WelcomPage.html'))
});

app.get(`/:id(\\d+)`, function (req, res){
    counter[req.params.id]++;
    res.sendFile(path.join(__dirname + '/pub/Display.html'));
});

app.get(`/times`, function (req, res){
    res.send({counter});
});

app.listen(port, () => {
    console.log('server is listening on port 3000');
});

