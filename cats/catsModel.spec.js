const db = require('../data/dbConfig.js')
const Cats = require('./catsModel.js')

describe('cats model', function(){
        describe('getAll()', function() {
          //TODO: CLEAR OUT THE SEEDS 
          beforeEach(async () => {
               await db('cats').truncate()
          })

          //TODO: INSERT 3 CATS AND GET ALL BACK
          it('should return all 0 cat records from seed file', async function(){
               await Cats.insert({ name: 'felix', color: 'orange and white'})
               await Cats.insert({ name: 'reed', color: 'white'})
               await Cats.insert({ name: 'dog', color: 'ashy gray'})

               let allCats = await Cats.getAll()
               expect(allCats).toHaveLength(3)
          })
     })
})


describe('cats model', function(){
     describe('insert()', function(){
          //TODO: CLEAR OUT THE SEEDS 
          beforeEach(async () => {
               await db('cats').truncate()
          })
          
          //TODO: INSERT A NEW CAT 
          it('should insert a new cat', async function(){
               await Cats.insert({ name: "gabe", color: "brown"})
               await Cats.insert({name: 'felix', color: 'orange and white'})
               const cats = await db('cats');
               
               expect(cats).toHaveLength(2);
               expect(cats[0].name).toBe('gabe')
               expect(cats[0].color).toBe('brown')
          })

          //TODO: NEW CAT WILL RETURN AFTER INSERT
          it('should return the inserted cat', async function(){
               let smolCat = await Cats.insert({ name: "reed", color: "gray"})
               const cats = await db('cats')

               expect(cats).toHaveLength(1);
               expect(smolCat.name).toBe("reed")
               expect(smolCat.color).toBe("gray")
               expect(smolCat.id).toBeDefined()
          })
     });
})


describe('cats model', function(){
     describe('delete()', function(){
          //TODO: CLEAR OUT THE SEEDS 
          beforeEach(async () => {
               await db('cats').truncate()
          })

          //TODO: INSERT A CAT AND DELETE IT 
          it('should delete a cat', async function(){
               await Cats.insert({ name: 'felix', color: 'orange and white'})
               await Cats.remove(1)

               let catsLeft = await Cats.getAll()
               expect(catsLeft).toHaveLength(0)
          })
     })
})