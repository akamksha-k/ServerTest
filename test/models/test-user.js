const chai = require('chai');
const expect = chai.expect;

const models = require('../../models');
const User = models.User;

describe('User model', () => {
  afterEach(() => {
    models.UserRole.destroy({ truncate: true });
    models.User.destroy({ truncate: true });
    models.Role.destroy({ truncate: true });
  });

  it('sets the attributes', done => {
    User.create({ username: 'testuser', password: 'testing', firstname:'test', lastname:'user' }).then(() => {
      User.findOne({ where: { username: 'testuser' } }).then(user => {
        expect(user.username).to.eql('testuser');
        expect(user.password).to.eql('testing');
        expect(user.firstname).to.eql('test');
        expect(user.lastname).to.eql('user');
        done();
      });
    });
  });

  it('can have a role', done => {
    models.Role.create({ key: 'admin',description: 'Admin' }).then(role => {
      User.create({ username: 'testuser', password: 'testing', firstname:'test', lastname:'user'  }).then(() => {
        User.findOne({ where: { username: 'testuser' } }).then(user => {
          user.addRole(role).then(() => {
            user.getRoles().then(roles => {
              let roleKeys = roles.map(role => role.key);

              expect(roleKeys.length).to.eql(1);
              expect(roleKeys).to.include('admin');
              done();
            });
          });
        });
      });
    });
  });
});
