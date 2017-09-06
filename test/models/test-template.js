const chai = require('chai');
const expect = chai.expect;

const models = require('../../models');
const Template = models.Template;
const TemplateSection = models.TemplateSection;

describe('Template model', () => {
  afterEach(() => {
    models.TemplateSection.destroy({ truncate: true });
    models.Template.destroy({ truncate: true });
  });

  it('Insert a record to Template', done => {
    models.Template
      .create({
        sponsorId: null,
        version: '1.0',
        createdBy: 1,
        createdAt: new Date(),
      })
      .then(template => {
        TemplateSection.create({
          TemplateId: template.id,
          title: 'Protocol Summary',
          number:"1",
          order:1,
          sectionTypeId: 3,
          ParentId: null,
          structure: null,
          createdBy: 1,
          createdAt: new Date(),
        }).then(() => {
          TemplateSection.findOne({
            where: { title: 'Protocol Summary' },
          }).then(templateSection => {
            expect(template.version).to.eql('1.0');
            expect(templateSection.title).to.eql('Protocol Summary');
            done();
          });
        });
      });
  });
});
