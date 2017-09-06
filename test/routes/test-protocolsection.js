const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const chaiDatetime = require('chai-datetime');
const btoa = require('btoa');

const server = require('../../app.js');
const models = require('../../models');
const Protocol = models.Protocol;
const ProtocolSection = models.ProtocolSection;

chai.use(chaiHttp);

const validProtocolAttributes = {
  title: 'testTitle',
  shortTitle: 'testShortTitle',
  number: '1n234',
  sponsorId: 123,
  therapeuticArea: 'testTarea',
  drugProjectId: '113424',
  compoundNumber: '123',
  stateId: 1,
  developmenetPhase: 'testphase',
  indication: 'test2q434',
  trialTypeId: '1',
  MedicId: 1,
  StatisticianId: 1,
  startedAt: null,
  endedAt: null,
  createdBy: 1,
  createdAt: '2017-06-22 10:56:35',
  targetEndDate: '2018-07-25 00:00:00',
  studyNickName: 'testNickName',
};
let validSectionAttributes = {
  title: 'testTitle',
  TemplateSectionId: '1',
  StateId: '3',
  createdBy: 1,
  createdAt: '2017-06-22 10:56:35',
};
const validUpdateBody = {
  content: {
    type: 'Heading',
    options: {
      number: '2.1',
      text: 'Introduction',
    },
  },
  userId: '2',
};

const validUpdateStateBody = {
  StateId: 3,
  userId: '2',
};

describe('Protocol Section Save API ', () => {
  afterEach(() => {
    Protocol.destroy({ truncate: true });
    ProtocolSection.destroy({ truncate: true });
  });

  it('Should return 404, if the id does not match a protocol section', done => {
    chai
      .request(server)
      .put('/protocolsection/999999')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .send({
        content: ' ',
        userId: '1n234',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have
          .property('statusMessage')
          .and.equal('Protocol Section with id 999999 not found');
        done();
      });
  });

  it('updates the protocol section content', done => {
    Protocol.create(validProtocolAttributes).then(protocol => {
      validSectionAttributes.ProtocolId = protocol.id;
      ProtocolSection.create(validSectionAttributes).then(protocolSection => {
        chai
          .request(server)
          .put('/protocolsection/' + protocolSection.id)
          .set('Content-type', ' application/json')
          .set('Authorization', 'Basic ' + btoa('teame:eels'))
          .send(validUpdateBody)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have
              .property('statusMessage')
              .and.equal(`Protocol Section content updated.`);
            expect(res.body).to.have.property('protocolSection');
            expect(res.body.protocolSection).to.have.property('id');

            protocolSection.reload().then(() => {
              expect(protocolSection.content).to.deep.equal(
                validUpdateBody.content
              );
              protocol.reload().then(() => {
                expect(protocol.stateId).to.equal(2);

                done();
              });
            });
          });
      });
    });
  });

  it('updates the protocol section Status', done => {
    Protocol.create(validProtocolAttributes).then(protocol => {
      validSectionAttributes.ProtocolId = protocol.id;
      ProtocolSection.create(validSectionAttributes).then(protocolSection => {
        chai
          .request(server)
          .put('/protocolsection/changeState/' + protocolSection.id)
          .set('Content-type', ' application/json')
          .set('Authorization', 'Basic ' + btoa('teame:eels'))
          .send(validUpdateStateBody)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have
              .property('statusMessage')
              .and.equal(`Protocol Section State updated.`);
            expect(res.body).to.have.property('protocolSection');
            expect(res.body.protocolSection).to.have.property('id');

            protocolSection.reload().then(() => {
              expect(protocolSection.StateId).to.equal(
                validUpdateStateBody.StateId
              );
              done();
            });
          });
      });
    });
  });

  it('updates the updated at/by of the section and the protocol', done => {
    chai.use(chaiDatetime);

    Protocol.create(validProtocolAttributes).then(protocol => {
      validSectionAttributes.ProtocolId = protocol.id;
      ProtocolSection.create(validSectionAttributes).then(protocolSection => {
        chai
          .request(server)
          .put('/protocolsection/' + protocolSection.id)
          .set('Content-type', ' application/json')
          .set('Authorization', 'Basic ' + btoa('teame:eels'))
          .send(validUpdateBody)
          .end((err, res) => {
            let today = new Date();

            expect(res).to.have.status(200);

            protocol.reload().then(() => {
              expect(protocol.updatedBy).to.equal(2);
              expect(protocol.updatedAt).to.equalDate(today);

              protocolSection.reload().then(() => {
                expect(protocolSection.updatedBy).to.equal(2);
                expect(protocolSection.updatedAt).to.equalDate(today);
                done();
              });
            });
          });
      });
    });
  });

  it('returns a 404 if section details are not found', done => {
    chai
      .request(server)
      .post('/protocolsection/searchSectionDetailsByCriteria')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .send({
        ProtocolId: -1,
        TemplateSectionId: -1,
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have
          .property('statusMessage')
          .and.equal('Section details not found');
        done();
      });
  });
});
