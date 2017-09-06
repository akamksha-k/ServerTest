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
            number: '3.1.',
            text: 'Objectives and Endpoints',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Statistical_Hypotheses_fullText',
            value:
              '<ul><li>Primary</li><ul><li><strong>Primary Objective:</strong> To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Progression Free Survival, in patients with advanced NSCLC</li><li><strong>Primary Endpoint:</strong> Progression Free Survival, measured as time from randomisation until the date of objective disease progression or death. PFS will be assessed using Blinded Independent Central Review assessments according to RECIST 1.1</li></ul><li><strong>Secondary Objectives</strong></li><ul><li><strong>Secondary Objective 1:</strong> To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Objective Response Rate, in patients with advanced NSCLC</li><li><strong>Secondary Endpoint 1:</strong> Objective Response Rate, measured as the number (%) of patients with measurable disease with at least 1 visit response of CR (Complete response) or PR (Partial response), assessed using Blinded Independent Central Review assessments according to RECIST 1.1</li><li><strong>Secondary Objective 2:</strong> To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Overall Survival, in patients with advanced NSCLC</li><li><strong>Secondary Endpoint 2:</strong> Overall Survival, measured as the time from randomization until death from any cause</li><li><strong>Secondary Objective 3:</strong> To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Duration of Response, in patients with advanced NSCLC</li><li><strong>Secondary Endpoint 3: </strong>Duration of Response measured as the time from the date of first documented response (i.e., subsequently confirmed) until the date of documented progression or death in the absence of disease progression</li><li><strong>Secondary Objective 4: </strong>To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Disease Control Rate, in patients with advanced NSCLC</li><li><strong>Secondary Endpoint 4:</strong> Disease Control Rate measured as the percentage of patients who have a best overall response of CR or PR or SD (Stable disease)</li><li><strong>Secondary Objective 5: </strong>To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Depth of response, in patients with advanced NSCLC</li><li><strong>Secondary Endpoint 5:</strong> Depth of Response measured as the relative change in the sum of the longest diameters of RECIST target lesions at the nadir in the absence of new lesions or progression of non-target lesions compared to baseline</li></ul><li><strong>Safety</strong></li><ul><li><strong>Safety Objective 1:</strong> To assess the safety and tolerability profile EEDEV-3456 compared to Standard of Care in the first line setting for treatment of patients with advanced NSCLC</li><li><strong>Safety Endpoint 1:</strong> Safety and tolerability measured through Adverse Events (AEs), physical examinations, laboratory findings, and vital signs</li></ul><li><strong>Exploratory </strong></li><ul><li><strong>Exploratory Objective 1:</strong> To investigate the relationship between PK exposure and clinical outcomes, efficacy, AEs, exploratory biomarkers, and/or safety parameters</li><li><strong>Exploratory Endpoint 1:</strong> A graphical and/or a data modeling approach will be used to analyze PK exposure and the relationship with clinical outcomes, efficacy, AEs, exploratory biomarkers, and/or safety parameters</li><li><strong>Exploratory Objective 2:</strong> To describe and evaluate resource use associated with assigned treatments and underlying disease during assigned treatment</li><li><strong>Exploratory Endpoint 2:</strong> Health resource utilization measures including hospitalization, outpatient visits, or emergency department visits</li><li><strong>Exploratory Objective 3:</strong> To investigate the relationship between biomarkers and clinical outcomes, efficacy, AEs, and/or safety parameters</li><li><strong>Exploratory Endpoint 3:</strong> A graphical and/or a data modeling approach will be used to analyze biomarkers (defined under alternative methods) and the relationship with clinical outcomes, efficacy, AEs, and/or safety parameters</li></ul></ul>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '3',
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
        number: '3',
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
