const db = require('../data/dbConfig.js')
const Cats = require('./catsModel.js')



describe('cats model', function(){
     describe('insert()', function(){
          beforeEach(async () => {
               await db('cats').truncate()
          })
          
          it('should insert a new cat', async function(){
          await Cats.insert({ name: "gabe", color: "brown"})
          
          const cats = await db('cats')
          expect(cats).toHaveLength(1);
     })
     });


})