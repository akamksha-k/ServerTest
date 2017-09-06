const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const btoa = require('btoa');

const server = require('../../app.js');
const models = require('../../models');
const User = models.User;
const UserRole = models.UserRole;
chai.use(chaiHttp);

describe('Users Authenticate API endpoint', () => {
  afterEach(() => {
    models.User.destroy({ truncate: true });
  });

  it('Should check if the user exists, and if  does not exist return 401 status', done => {
    chai
      .request(server)
      .post('/users/authenticate')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .send({
        username: 'sm1',
        password: 'testing',
      })
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it('should check whether the user exists and if exists , return 200 and model containing firstname and lastname', done => {
    User.create({
      username: 'testuser',
      password: 'testing',
      firstname: 'test',
      lastname: 'user',
    }).then(() => {
      chai
        .request(server)
        .post('/users/authenticate')
        .set('Content-type', ' application/json')
        .set('Authorization', 'Basic ' + btoa('teame:eels'))
        .send({
          username: 'testuser',
          password: 'testing',
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.have.property('firstname').and.equal('test');
          expect(res.body).to.have.property('lastname').and.equal('user');
          done();
        });
    });
  });

  const createuser = {
    id: 2,
    username: 'Alex',
    password: 'password',
    firstname: 'Alex',
    lastname: 'Broadman',
    createdAt: '2017-07-12 10:56:35',
    updatedAt: '2017-07-12 10:56:35',
  };

  it('Get the list of users', done => {
    User.create(createuser).then(protocol => {
      chai
        .request(server)
        .get(`/users/getAllUsers`)
        .set('Content-type', ' application/json')
        .set('Authorization', 'Basic ' + btoa('teame:eels'))
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('statusMessage');
          expect(res.body).to.have.property('users');

          done();
        });
    });
  });

  it('should check whether the parameters - username and password are passed in the body , if not send ,return 400 ', done => {
    chai
      .request(server)
      .post('/users/authenticate')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
