const express = require('express')
const server = express();
const configureMiddleware = require('./configureMiddleware.js')
const Cats = require('../cats/catsModel.js')

configureMiddleware(server)


server.get('/', (req,res) => {
     res.status(200).json({ api: "up", message: "Hello, you are at the root of the server"})
})

server.get('/api/cats', (req, res) => {
     Cats.getAll()
     .then(cats => {
          res.status(200).json(cats)
     })
})

module.exports = server;