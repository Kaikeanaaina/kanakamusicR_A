'use strict'

const path = require('path')
const request = require('supertest')
const chai = require('chai')
const expect = chai.expect
// const app = require('../server.js')

xdescribe('Songs Route Test', () => {

  beforeEach((done) => {
    //setup server
    app()
  })

  describe('GET /songs', () => {
    it('should return an array', function(done) {
      this.timeout(0);
      request(app)
      .get('/songs')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body).to.be.an('array')
        return done()
      })
    })
  })

})
