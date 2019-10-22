//Dependencies
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');



//Global Constant
const port = process.env.PORT || 3002;

//Initialize the App
const app = express();

//Compression Module
app.use(compression())

//bodyParser Middleware
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '5mb',
}));

//Start the app
app.listen(port, () => {
    console.log(`the app is listening on ${port}`)
});