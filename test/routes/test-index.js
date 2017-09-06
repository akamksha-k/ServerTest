const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const btoa = require('btoa');

const server = require('../../app.js');

chai.use(chaiHttp);

describe('Root of API', () => {
  it('returns title of API', done => {
    chai
      .request(server)
      .get('/')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have
          .property('title')
          .and.equal('Digital Clinical API Server');
        done();
      });
  });
  it('returns a user count', done => {
    chai
      .request(server)
      .get('/')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .end((err, res) => {
        expect(res.body).to.have.property('userCount').and.equal(0);
        done();
      });
  });
});
