const request = require('supertest')
const server = require('../api/server.js')


it('should set db environment to testing', function() {
     expect(process.env.DB_ENV).toBe("testing")
})

describe("server", function(){
     describe('GET /', function(){
          it("should return 200 OK", function(){
               return request(server)
               .get("/")
               .then(response => {
                    expect(response.status).toBe(200)
               })
          })

          it("should return a message with the key message inside the JSON body", function(){
               return request(server)
               .get('/')
               .then(response => {
                    expect(response.body.message).toBe("Hello, you are at the root of the server")
               })
          })
     })
})
