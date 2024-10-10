const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', function() {
  it('responds with Hello, World!', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});

