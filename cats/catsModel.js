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
     })
}

function remove(cat){
     return null 
}

function getAll(){
     return db('cats')
}

