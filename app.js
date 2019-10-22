//Dependencies
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');


app.use(BodyParser.urlencoded({
    extended: false,
    limit: '5mb',
}));