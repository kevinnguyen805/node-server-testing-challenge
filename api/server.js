const express = require('express')
const server = express();
const configureMiddleware = require('./configureMiddleware.js')

configureMiddleware(server)


server.get('/', (req,res) => {
     res.send("Hello, you are at the root of the server")
})


module.exports = server;