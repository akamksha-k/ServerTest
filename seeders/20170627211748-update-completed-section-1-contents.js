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
            number: '1.',
            text: 'Protocol Summary',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '1.1',
            text: 'Synopsis',
          },
        },
        {
          type: 'MetaData',
          options: {
            formLabel: 'Protocol Title:',
            field: 'title',
          },
        },
        {
          type: 'MetaData',
          options: {
            formLabel: 'Short Title:',
            field: 'shortTitle',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Rationale:',
            value:
              '<p>This is a randomized, double-blind, multi-center, global, Phase III study to determine the efficacy and safety of EEDEV-3456 versus a standard of care epidermal growth factor receptor tyrosine kinase inhibitor in patients with locally advanced or Metastatic Non Small Cell Lung Cancer.</p>',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Objectives and Endpoints',
            value: `*<p> Primary\n
- Primary Objective: To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Progression Free Survival, in patients with advanced NSCLC \n
- Primary Endpoint: Progression Free Survival, measured as time from randomisation until the date of objective disease progression or death. PFS will be assessed using Blinded Independent Central Review assessments according to RECIST 1.1\n
* Secondary\n
- Secondary Objective 1: To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Objective Response Rate, in patients with advanced NSCLC \n
- Secondary Endpoint 1: Objective Response Rate, measured as the number (%) of patients with measurable disease with at least 1 visit response of CR (Complete response) or PR (Partial response), assessed using Blinded Independent Central Review assessments according to RECIST 1.1\n
- Secondary Objective 2: To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Overall Survival, in patients with advanced NSCLC\n
- Secondary Endpoint 2: Overall Survival, measured as the time from randomization until death from any cause\n
- Secondary Objective 3: To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Duration of Response, in patients with advanced NSCLC\n
- Secondary Endpoint 3: Duration of Response measured as the time from the date of first documented response (i.e., subsequently confirmed) until the date of documented progression or death in the absence of disease progression\n
- Secondary Objective 4: To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Disease Control Rate, in patients with advanced NSCLC\n
- Secondary Endpoint 4: Disease Control Rate measured as the percentage of patients who have a best overall response of CR or PR or SD (Stable disease)\n
- Secondary Objective 5: To assess the efficacy of EEDEV-3456 compared to Standard of Care tyrosine kinase inhibitor therapy in terms of Depth of response, in patients with advanced NSCLC\n
- Secondary Endpoint 5: Depth of Response measured as the relative change in the sum of the longest diameters of RECIST target lesions at the nadir in the absence of new lesions or progression of non-target lesions compared to baseline\n
* Safety\n
- Safety Objective 1: To assess the safety and tolerability profile EEDEV-3456 compared to Standard of Care in the first line setting for treatment of patients with advanced NSCLC\n
- Safety Endpoint 1: Safety and tolerability measured through Adverse Events (AEs), physical examinations, laboratory findings, and vital signs</p>`,
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Overall Design:',
            value: `<p>Adult patients (age ≥18 years) with advanced or metastatic (Stage IV) histologically or cytologically documented EGFR and wild-type NSCLC will be randomized in a 1:1 ratio to receive treatment with EEDEV-3456 or Standard of Care tyrosine kinase inhibitor therapy.\n
Tumor assessments will be performed every 6 weeks for the first 48 weeks and then every 8 weeks until confirmed disease progression, with categorization of objective tumor response by Response Evaluation Criteria in Solid Tumors, Version 1.1 (RECIST 1.1).</p>`,
          },
        },
        {
          type: 'FullText',
          options: {
            exampleText: true,
            formLabel: 'Number of Participants:',
            value:
              '<p>Approximately 1200 participants will be screened to achieve 980 randomly assigned to study intervention and 960 evaluable participants for an estimated total of 480 evaluable participants per intervention group.</p>',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Intervention Groups and Duration:',
            value: `<p>* Drug: EEDEV-3456 100 mg/50 mg\n
The initial dose of EEDEV-3456 100 mg once daily can be reduced to 50 mg once daily under specific circumstances. A cycle of treatment is defined as 28 days of once daily treatment.\n
Number of Cycles: as long as patients are continuing to show clinical benefit, as judged by the Investigator, and in the absence of discontinuation criteria\n
* Drug: Standard of Care tyrosine kinase inhibitor\n
A cycle of treatment is defined as 28 days of once daily treatment.\n
Number of Cycles: as long as patients are continuing to show clinical benefit, as judged by the Investigator, and in the absence of discontinuation criteria.\n
Following objective disease progression according to RECIST 1.1, as per investigator assessment, patients who were randomized to Standard of Care arm may have the option to receive open-label EEDEV-3456.</p>`,
          },
        },
        {
          type: 'RadioButton',
          options: {
            formLabel: 'Data Monitoring Committee:',
            authorInstructions: '',
            availableOptions: ['Yes', 'No'],
            value: 'Yes',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '1.2',
            text: 'Schema',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Schema',
            value: '<p>Image uploads not available at this time.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '1.3',
            text: 'Schedule of Activities (SoA)',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Activities',
            value: '<p>Complex tables not available at this time.</p>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '1',
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
        number: '1',
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
