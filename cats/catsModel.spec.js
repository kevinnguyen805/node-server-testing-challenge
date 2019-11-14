const db = require('../data/dbConfig.js')
const Cats = require('./catsModel.js')



describe('cats model', function(){
     describe('insert()', function(){
          //TODO: CLEAR OUT THE SEEDS 
          beforeEach(async () => {
               await db('cats').truncate()
          })
          
          //TODO: INSERT A NEW CAT 
          it('should insert a new cat', async function(){
               await Cats.insert({ name: "gabe", color: "brown"})
               const cats = await db('cats');
               
               expect(cats).toHaveLength(1);
               expect(cats[0].name).toBe('gabe')
               expect(cats[0].color).toBe('brown')
          })

          //TODO: NEW CAT WILL RETURN AFTER INSERT
          it('should return the inserted cat', async function(){
               let smolCat = await Cats.insert({ name: "Gabe", color: "gray"})
               console.log(smolCat)
               expect(smolCat.name).toBe("Gabe")
               expect(smolCat.color).toBe("gray")
               expect(smolCat.id).toBeDefined()
          })
     });


})