//Dependencies
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const compression = require('compression')



//Global Constant
const port = process.env.PORT || 3002;

//Creds
const Access = require('./cred.json');

//Initialize the App
const app = express();

//Compression Module
app.use(compression())

//bodyParser Middleware
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '5mb',
}));

// Making Request
const board = {
    method: "GET",
    url: `https://api.trello.com/1/members/me/tokens?webhooks=true&key=${Access.API_KEY}&token=${Access.API_TOKEN}`
}

axios(board).then(res => console.log(res.data[0].webhooks))

// const notifications = {
//     method: "POST",
//     url: `https://api.trello.com/1/tokens/${Access.API_TOKEN}/webhooks/`,
//     data: {
//         "key": Access.API_KEY,
//         "callbackURL": "http://62.203.104.17:3002",
//         "idModel": Access.BOARD_ID,
//         "description": "GR8.1"
//     }
// }

// axios(notifications).then(res => console.log(res.data.actions))
//     .catch(err => console.log(err))
// const delete_hook = {
//     method: "delete",
//     url: `https://api.trello.com/1/webhooks/5daf81e8540bfe1ee4721693?key=${Access.API_KEY}&token=${Access.API_TOKEN}`


// }
// axios(delete_hook).then(res => console.log(res)).catch(err => console.log(err))


app.get('/', (req, res) => {
    res.sendStatus(200)
})
app.post('/', (req, res) => {
    res.sendStatus(200

    )
    console.log(req)
})


//Start the app
app.listen(port, () => {
    console.log(`the app is listening on ${port}`)
});