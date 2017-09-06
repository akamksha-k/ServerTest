const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const btoa = require('btoa');

const server = require('../../app.js');
const models = require('../../models');
const Protocol = models.Protocol;

chai.use(chaiHttp);

const validParams = {
  shortTitle: 'testShortTitle',
  number: '1n234',
  sponsorId: 123,
  therapeuticArea: 'test2q434',
  drugProjectId: '113424',
  compoundNumber: '1012143214',
  stateId: 1,
  createdBy: 1,
  targetEndDate: new Date(2018, 12, 1),
  studyNickName: 'testNickName',
};

const validProtocol = {
  title: 'testTitle',
  shortTitle: 'testShortTitle',
  number: '1n234',
  sponsorId: 123,
  therapeuticArea: 'testTarea',
  drugProjectId: '113424',
  compoundNumber: '123',
  stateId: 3,
  developmenetPhase: 'testphase',
  indication: 'test2q434',
  trialTypeId: '1',
  startedAt: null,
  endedAt: null,
  createdBy: 1,
  createdAt: '2017-06-22 10:56:35',
  targetEndDate: new Date(2018, 12, 1),
  studyNickName: 'testNickName',
};

describe('Dashboard protocol fetch endpoint', () => {
  afterEach(() => {
    Protocol.destroy({ truncate: true });
  });

  it('returns a 404 if for the userid does not have protocols to work on ', done => {
    chai
      .request(server)
      .get('/dashboard/999')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have
          .property('statusMessage')
          .and.equal('Protocols not found');
        done();
      });
  });

  it('returns protocols grouped as active and complete', done => {
    Protocol.create(validProtocol).then(completeProtocol => {
      const activeParams = Object.assign(validProtocol, {
        stateId: 1,
        title: 'Active Title',
        shortTitle: 'ActiveShortTitle',
        number: '1n567',
        targetEndDate: new Date(2018, 12, 1),
        studyNickName: 'SecondNickName',
      });
      Protocol.create(activeParams).then(activeProtocol => {
        chai
          .request(server)
          .get(`/dashboard/${completeProtocol.createdBy}`)
          .set('Content-type', ' application/json')
          .set('Authorization', 'Basic ' + btoa('teame:eels'))
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have
              .property('statusMessage')
              .and.equal(`Found existing protocols`);
            expect(res.body).to.have.property('protocols');
            expect(res.body.protocols).to.have.property('active');
            expect(res.body.protocols).to.have.property('complete');
            const active = res.body.protocols.active;
            const complete = res.body.protocols.complete;
            expect(active.length).to.eql(1);
            expect(complete.length).to.eql(1);
            expect(active[0].id).to.eql(activeProtocol.id);
            expect(complete[0].id).to.eql(completeProtocol.id);
            expect(complete[0].completeSections).to.eql('0');
            done();
          });
      });
    });
  });
});
