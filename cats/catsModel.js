const db = require('../data/dbConfig.js')

module.exports = {
     insert,
     remove,
     getAll
}

function insert(newCat){
     return db('cats')
     .insert(newCat, "id")
     .then(([id]) => {
          return db('cats')
          .where('id', '=', id)
          .first()                 //TODO - YOU WANT FIRST() SO YOU GRAB THE OBJECT NOT THE ARRAY + OBJECT (will create errors)
     })
}

function remove(cat){
     return null 
}

function getAll(){
     return db('cats')
}

