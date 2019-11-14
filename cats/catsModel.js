const db = require('../data/dbConfig.js')

module.exports = {
     insert,
     remove,
     getAll
}

function insert(newCat){
     return null 
}


function remove(cat){
     return null 
}

function getAll(){
     return db('cats')
}

