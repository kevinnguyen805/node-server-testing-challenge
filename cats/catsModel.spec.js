const request = require('supertest')
const server = require('../api/server.js')

it('should set db environment to testing', function() {
     expect(process.env.DB_ENV).toBe("testing")
})