const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const btoa = require('btoa');

const server = require('../../app.js');
const models = require('../../models');
const Protocol = models.Protocol;
const ProtocolSection = models.ProtocolSection;

chai.use(chaiHttp);

const validUpdateStateBody = {
  stateId: 1,
  userId: "2"
};

const validParams = {
  shortTitle: 'testShortTitle',
  number: '1n234',
  sponsorId: 123,
  therapeuticArea: 'test2q434',
  drugProjectId: '113424',
  compoundNumber: '1012143214',
  stateId: 1,
  createdBy: 1,
  targetEndDate: '2018-07-25 00:00:00',
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
  targetEndDate: '2018-07-25 00:00:00',
  studyNickName: 'testNickName',
};

describe('Protcol fetch endpoint', () => {
  afterEach(() => {
    Protocol.destroy({ truncate: true });
  });

  it('returns a 404 if the id does not match a protocol', done => {
    chai
      .request(server)
      .get('/protocol/999/False')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have
          .property('statusMessage')
          .and.equal('Protocol 999 not found');
        done();
      });
  });
  validParams.number += 2;
  it('returns the matched protocol with Section Details', done => {
    Protocol.create(validParams).then(protocol => {
      chai
        .request(server)
        .get(`/protocol/${protocol.id}/${'True'}`)
        .set('Content-type', ' application/json')
        .set('Authorization', 'Basic ' + btoa('teame:eels'))
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have
            .property('statusMessage')
            .and.equal(`Found protocol ${protocol.id}`);
          expect(res.body).to.have.property('protocol');
          expect(res.body.protocol).to.have
            .property('shortTitle')
            .and.equal(validParams.shortTitle);
          done();
        });
    });
  });

  validParams.number += 2;
  it('returns the matched protocol with out Section Details', done => {
    Protocol.create(validParams).then(protocol => {
      chai
        .request(server)
        .get(`/protocol/${protocol.id}/${'False'}`)
        .set('Content-type', ' application/json')
        .set('Authorization', 'Basic ' + btoa('teame:eels'))
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have
            .property('statusMessage')
            .and.equal(`Found protocol ${protocol.id}`);
          expect(res.body).to.have.property('protocol');
          expect(res.body.protocol).to.have
            .property('shortTitle')
            .and.equal(validParams.shortTitle);
          done();
        });
    });
  });
});

describe('Protocol Create API endpoint', () => {
  afterEach(() => {
    ProtocolSection.destroy({ truncate: true });
    Protocol.destroy({ truncate: true });
  });

  it('Should test for validation return 400 when title not found', done => {
    chai
      .request(server)
      .post('/protocol/create')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .send({
        title: ' ',
        number: '1n234',
        sponsorId: 123,
        therapeuticArea: 'test2q434',
        drugProjectId: '113424',
        compoundNumber: '1012143214',
        createdBy: 1,
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  validParams.number += 2;
  it('Should insert data when validations passes', done => {
    chai
      .request(server)
      .post('/protocol/create')
      .set('Content-type', ' application/json')
      .set('Authorization', 'Basic ' + btoa('teame:eels'))
      .send(validParams)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('protocol');
        expect(res.body.protocol).to.have.property('id');
        done();
      });
  });

  describe('cloning a source protocol', () => {
    validParams.number += 2;
    it('should retrun a 404 if the source protocol is not found', done => {
      const params = Object.assign({ SourceProtocolId: 1 }, validParams);

      chai
        .request(server)
        .post('/protocol/create')
        .set('Content-type', ' application/json')
        .set('Authorization', 'Basic ' + btoa('teame:eels'))
        .send(params)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have.property('statusMessage');
          expect(res.body.statusMessage).to.eql(
            'Source Protocol was not found'
          );
          done();
        });
    });

    it('Should insert data when the source protocol is found', done => {
      const sourceParams = {
        shortTitle: 'Original Test Short Title',
        number: '0123445',
        sponsorId: 123,
        therapeuticArea: 'test2q434',
        drugProjectId: '113424',
        compoundNumber: '1012143214',
        TemplateId: 1,
        stateId: 1,
        createdBy: 1,
        targetEndDate: '2018-07-25 00:00:00',
        studyNickName: 'testNickName',
      };

      Protocol.create(sourceParams).then(protocol => {
        const params = Object.assign(
          { SourceProtocolId: protocol.id },
          validParams
        );

        chai
          .request(server)
          .post('/protocol/create')
          .set('Content-type', ' application/json')
          .set('Authorization', 'Basic ' + btoa('teame:eels'))
          .send(params)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('protocol');
            expect(res.body.protocol).to.have.property('id');
            done();
          });
      });
    });
  });

  describe('Protcol fetch by criteria', () => {
    afterEach(() => {
      Protocol.destroy({ truncate: true });
    });

    it('returns a 404 if protocol does not found', done => {
      chai
        .request(server)
        .post('/protocol/searchProtocolsByCriteria')
        .set('Content-type', ' application/json')
        .set('Authorization', 'Basic ' + btoa('teame:eels'))
        .send({
          chkStudyNickName: false,
          studyNickName:'EEDEV-3456',
          chkTherapticAreas: true,
          therapeuticArea: 'WrongOncology',
          chkIndication: false,
          indication: 'Acute Myocardial Infarction',
          chkCompoundNumber: false,
          compoundNumber: '123456',
          chkPhasevalue: false,
          developmenetPhase: 'Phase I/II',
          chkstudytype: false,
          trialTypeId: '2',
          IsSearchByProtocol: false,
          ProtocolNumberValue: 'DV625A002',
        })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.have
            .property('statusMessage')
            .and.equal('Protocol not found');
          done();
        });
    });

    it('returns the matched protocols', done => {
      Protocol.create(validProtocol).then(protocol => {
        chai
          .request(server)
          .post('/protocol/searchProtocolsByCriteria')
          .set('Content-type', ' application/json')
          .set('Authorization', 'Basic ' + btoa('teame:eels'))
          .send({
            chkStudyNickName: false,
            studyNickName:'EEDEV-3456',
            chkTherapticAreas: true,
            therapeuticArea: 'testTarea',
            chkIndication: false,
            indication: 'Acute Myocardial Infarction',
            chkCompoundNumber: false,
            compoundNumber: '123456',
            chkPhasevalue: false,
            developmenetPhase: 'Phase I/II',
            chkstudytype: false,
            trialTypeId: '2',
            IsSearchByProtocol: false,
            ProtocolNumberValue: 'DV625A002',
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have
              .property('statusMessage')
              .and.equal(`Found existing protocols`);
            done();
          });
      });
    });



it("updates the protocol Status", done => {
    Protocol.create(validProtocol).then(protocol => {
        chai
          .request(server)
          .put("/protocol/changeState/" + protocol.id)
          .set("Content-type", " application/json")
          .set("Authorization", "Basic " + btoa("teame:eels"))
          .send(validUpdateStateBody)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have
              .property("statusMessage")
              .and.equal(`Protocol State updated.`);
            expect(res.body).to.have.property("protocol");
            expect(res.body.protocol).to.have.property("id");

            protocol.reload().then(() => {
              expect(protocol.stateId).to.deep.equal(
                validUpdateStateBody.stateId
              );
              done();
            });
          });
    });
  });

  });
});
