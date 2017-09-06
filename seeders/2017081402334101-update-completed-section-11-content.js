'use strict';
const models = require('../models');
const TemplateSection = models.TemplateSection;
const ProtocolSection = models.ProtocolSection;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let sectionContent = {
      segments: [
        {
          type: 'Heading',
          options: {
            number: '11.',
            text: 'References',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'ref_fullText',
            value:
              '<p><strong>Hatcher RA, Trussell J, Nelson AL, Cates W Jr, Stewart F, Kowal D, eds. Contraceptive technology. 19th edition. New York: Ardent Media, 2007(a): 24. Table 3-2</strong></p>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '11',
      },
    }).then(templateSection => {
      return templateSection.getProtocolSections().then(sections => {
        const sectionIDs = sections.map(section => {
          return section.id;
        });
        return ProtocolSection.update(
          { content: sectionContent },
          { where: { id: sectionIDs } }
        ).then(() => {
          return console.log(
            `Updated content for ${sections.length} sections (${sectionIDs}`
          );
        });
      });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '11',
      },
    }).then(templateSection => {
      return templateSection.getProtocolSections().then(sections => {
        const sectionIDs = sections.map(section => {
          return section.id;
        });
        return ProtocolSection.update(
          { content: templateSection.structure },
          { where: { id: sectionIDs } }
        ).then(() => {
          return console.log(
            `Updated content for ${sections.length} sections (${sectionIDs}`
          );
        });
      });
    });
  },
};
