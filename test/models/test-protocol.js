const chai = require('chai');
const expect = chai.expect;

const models = require('../../models');
const Protocol = models.Protocol;
const State = models.State;
const Template = models.Template;
const TemplateSection = models.TemplateSection;
const ProtocolSection = models.ProtocolSection;
const SectionAuthor = models.SectionAuthor;
const SectionReviewer = models.SectionReviewer;

describe('Protcol model', () => {
  afterEach(() => {
    Protocol.destroy({ truncate: true });
    State.destroy({ truncate: true });
    Template.destroy({ truncate: true });
    TemplateSection.destroy({ truncate: true });
    ProtocolSection.destroy({ truncate: true });
  });

  let createFromTemplate = () => {
    return Template.create({
      sponsorId: null,
      version: '1.0',
      createdBy: 1,
      createdAt: new Date(),
    }).then(template => {
      return TemplateSection.create({
        TemplateId: template.id,
        title: 'Protocol Summary',
        number: '1',
        order: 1,
        sectionTypeId: 3,
        ParentId: null,
        structure: { thing: 'something' },
        createdBy: 1,
        createdAt: new Date(),
      }).then(templateSection => {
        return State.create({
          id: 1,
          state: 'Not-Started',
          createdAt: new Date(),
          updatedAt: new Date(),
        }).then(state => {
          return Protocol.createFromTemplate({
            TemplateId: template.id,
            shortTitle: 'Ortho',
            number: 'Ortho1001',
            sponsorId: 1,
            therapeuticArea: 'OrthoPedic',
            drugProjectId: 'OrthoPedic1001',
            compoundNumber: 'Ortho_xyz_1001',
            stateId: 1,
            createdBy: 1,
            createdAt: new Date(),
            startedAt: new Date(),
            targetEndDate: new Date(2018, 12, 1),
            studyNickName: 'testNickName',
          });
        });
      });
    });
  };

  it('Insert a record to protocol', done => {
    State.create({
      id: 1,
      state: 'Not-Started',
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(state => {
      Template.create({
        sponsorId: null,
        version: '1.0',
        createdBy: 1,
        createdAt: new Date(),
      }).then(template => {
        Protocol.create({
          shortTitle: 'Ortho',
          number: 'Ortho1001',
          sponsorId: 1,
          therapeuticArea: 'OrthoPedic',
          drugProjectId: 'OrthoPedic1001',
          compoundNumber: 'Ortho_xyz_1001',
          stateId: 1,
          TemplateId: template.id,
          createdBy: 1,
          MedicId: 1,
          StatisticianId: 1,
          createdAt: new Date(),
          startedAt: new Date(),
          targetEndDate: new Date(2018, 12, 1),
          studyNickName: 'testNickName',
        }).then(() => {
          Protocol.findOne({
            where: { shortTitle: 'Ortho' },
          }).then(protocol => {
            expect(protocol.compoundNumber).to.eql('Ortho_xyz_1001');
            expect(protocol.sponsorId).to.eql(1);
            done();
          });
        });
      });
    });

    it('Insert a record to protocol with long titles', done => {
      State.create({
        id: 1,
        state: 'Not-Started',
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then(state => {
        Template.create({
          sponsorId: null,
          version: '1.0',
          createdBy: 1,
          createdAt: new Date(),
        }).then(template => {
          Protocol.create({
            title: 'This is a very long title for the protocol that exceeds the default 255 characters string fields have in the database by default. The character limit for this field has been extended to 2000 characters. The character length of this title should be greater than 255 characters to make sure it can handle real-world titles.',
            number: 'Ortho1001',
            sponsorId: 1,
            therapeuticArea: 'OrthoPedic',
            drugProjectId: 'OrthoPedic1001',
            compoundNumber: 'Ortho_xyz_1001',
            stateId: 1,
            shortTitle: 'This is a very long shortTitle for the protocol that exceeds the default 255 characters string fields have in the database by default. The character limit for this field has been extended to 1000 characters. The character length of this title should be greater than 255 characters to make sure it can handle real-world titles.',
            TemplateId: template.id,
            createdBy: 1,
            MedicId: 1,
            StatisticianId: 1,
            createdAt: new Date(),
            startedAt: new Date(),
            targetEndDate: new Date(2018, 12, 1),
            studyNickName: 'testNickName',
          }).then(() => {
            Protocol.findOne({ where: { title: 'Ortho' } }).then(protocol => {
              expect(protocol.compoundNumber).to.eql('Ortho_xyz_1001');
              expect(protocol.sponsorId).to.eql(1);
              done();
            });
          });
        });
      });
    });
  });

  it('Insert a protocol & section', done => {
    Template.create({
      sponsorId: null,
      version: '1.0',
      createdBy: 1,
      createdAt: new Date(),
    }).then(template => {
      TemplateSection.create({
        TemplateId: template.id,
        number: '1',
        order: 1,
        title: 'Protocol Summary',
        sectionTypeId: 3,
        ParentId: null,
        structure: null,
        createdBy: 1,
        createdAt: new Date(),
      }).then(templateSection => {
        State.create({
          id: 1,
          state: 'Not-Started',
          createdAt: new Date(),
          updatedAt: new Date(),
        }).then(state => {
          Protocol.create({
            TemplateId: template.id,
            shortTitle: 'Ortho',
            number: 'Ortho1001',
            sponsorId: 1,
            therapeuticArea: 'OrthoPedic',
            drugProjectId: 'OrthoPedic1001',
            compoundNumber: 'Ortho_xyz_1001',
            stateId: 1,
            createdBy: 1,
            MedicId: 1,
            StatisticianId: 1,
            createdAt: new Date(),
            startedAt: new Date(),
            targetEndDate: new Date(2018, 12, 1),
            studyNickName: 'testNickName',
          }).then(protocol => {
            ProtocolSection.create({
              ProtocolId: protocol.id,
              title: 'Protocol Summary',
              number: '1',
              order: 1,
              TemplateSectionId: templateSection.id,
              ParentId: null,
              content: null,
              StateId: state.id,
              createdBy: 1,
              createdAt: new Date(),
            }).then(() => {
              ProtocolSection.findOne({
                where: { ProtocolId: protocol.id },
              }).then(protocolSection => {
                expect(protocolSection.TemplateSectionId).to.eql(
                  templateSection.id
                );
                done();
              });
            });
          });
        });
      });
    });
  });

  describe('.createFromTemplate', () => {
    it('creates a protocol with nested sections based on a template', done => {
      createFromTemplate().then(protocol => {
        protocol.getProtocolSections().then(sections => {
          expect(sections.length).to.eql(1);
          expect(sections[0].content).to.eql({ thing: 'something' });
          done();
        });
      });
    });
  });

  describe('.createFromProtocol', () => {
    it('creates a protocol with nested sections based on a template', done => {
      createFromTemplate().then(protocol => {
        Protocol.createFromProtocol(
          {
            TemplateId: 0,
            shortTitle: 'Ortho 2',
            number: 'Ortho1002',
            sponsorId: 1,
            therapeuticArea: 'OrthoPedic',
            drugProjectId: 'OrthoPedic1002',
            compoundNumber: 'Ortho_xyz_1002',
            stateId: 1,
            createdBy: 1,
            createdAt: new Date(),
            startedAt: new Date(),
            targetEndDate: new Date(2018, 12, 1),
            studyNickName: 'testNickName',
          },
          protocol
        ).then(newProtocol => {
          expect(newProtocol.TemplateId).to.eql(protocol.TemplateId);

          newProtocol.getProtocolSections().then(sections => {
            expect(sections.length).to.eql(1);
            expect(sections[0].content).to.eql({ thing: 'something' });
            done();
          });
        });
      });
    });
  });

  describe('.forUser', () => {
    afterEach(() => {
      SectionAuthor.destroy({ truncate: true });
      SectionReviewer.destroy({ truncate: true });
    });

    it('returns protocols created by the user', done => {
      createFromTemplate().then(protocol => {
        Protocol.forUser(1).then(protocols => {
          const result = protocols[0];
          expect(result.id).to.eql(protocol.id);
          expect(result.dataValues.sections).to.eql('1');
          expect(result.dataValues.unstartedSections).to.eql('1');
          done();
        });
      });
    });

    it('returns completed protocols created by the user', done => {
      createFromTemplate().then(protocol => {
        protocol.update({ stateId: 3 }).then(protocol => {
          Protocol.forUser(1, false).then(protocols => {
            const result = protocols[0];
            expect(result.id).to.eql(protocol.id);
            expect(result.dataValues.sections).to.eql('1');
            expect(result.dataValues.unstartedSections).to.eql('1');
            done();
          });
        });
      });
    });

    it('returns protocols that have the user assigned as an author', done => {
      createFromTemplate().then(protocol => {
        protocol.getProtocolSections().then(sections => {
          SectionAuthor.create({
            ProtocolId: protocol.id,
            ProtocolSectionId: sections[0].id,
            UserId: 2,
          }).then(authorship => {
            Protocol.forUser(2).then(protocols => {
              const result = protocols[0];
              expect(result.id).to.eql(protocol.id);
              expect(result.dataValues.authorSections).to.eql('1');
              done();
            });
          });
        });
      });
    });

    it('returns protocols that have the user assigned as a reviewer', done => {
      createFromTemplate().then(protocol => {
        protocol.getProtocolSections().then(sections => {
          SectionReviewer.create({
            ProtocolId: protocol.id,
            ProtocolSectionId: sections[0].id,
            UserId: 2,
          }).then(authorship => {
            Protocol.forUser(2).then(protocols => {
              const result = protocols[0];
              expect(result.id).to.eql(protocol.id);
              expect(result.dataValues.reviewerSections).to.eql('1');
              done();
            });
          });
        });
      });
    });
  });
});
