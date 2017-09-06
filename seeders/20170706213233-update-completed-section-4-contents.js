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
            number: '4.',
            text: 'Study Design',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Study Design',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.1',
            text: 'Overall Design',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Overall Design',
            value: `<p>Adult patients (age ≥18 years) with advanced or metastatic (Stage IV) histologically or cytologically documented EGFR and wild-type NSCLC will be randomized in a 1:1 ratio to receive treatment with EEDEV-3456 or Standard of Care tyrosine kinase inhibitor therapy.
Tumor assessments will be performed every 8 weeks until confirmed disease progression, with categorization of objective tumor response by Response Evaluation Criteria in Solid Tumors, Version 1.1 (RECIST 1.1).
Unless specific treatment discontinuation criteria are met, patients in all groups will continue therapy until disease progression.</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.2',
            text: 'Scientific Rationale for Study Design',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Scientific Rationale for Study Design',
            value: `<p>The promising Phase II results relating to both efficacy and safety of EEDEV-3456 in the treatment of advanced NSCLC warrant further investigation in a comprehensive Phase III program.  Comparison with existing products with a similar mode of action (Tyrosine Kinase inhibitors) is the next logical step to provide a full scientific assessment of the benefits of EEDEV-3456 in the advanced NSCLC population.
Patients in the Standard of Care (SoC) group will receive treatment determined by the Investigator, from the SoC agents approved for use in NSCLC in their local market, until progression per standard practice. The SoC options provided in this study include agents that are commonly used in advanced or metastatic NSCLC and allow sufficient flexibility for Investigators and patients to select the agents that reflect their normal clinical practice and national guidelines.</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.3',
            text: 'Justification for Dose',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Justification for Dose',
            value: `<p>The EEDEV-3456 doses and regimen selected for this study are based on the goal of selecting an optimal dose that would demonstrate promising efficacy, and have an acceptable safety profile.
On completion of the Phase II development program, a total of 474 patients with advanced NSCLC have been have received between 1 and 9 doses of EEDEV-3456. Various dose combinations were explored, with doses of EEDEV-3456 ranging from 5 to 200 mg. Patients have been dosed to a once daily, twice per week and three times per week schedule, with the goal of identifying the dose combination that gives the best risk:benefit profile in an acceptable range of PK and pharmacodynamic values.
Patients treated with doses of EEDEV-3456 above 150 mg had a higher rate of adverse events (AEs), including discontinuations due to AEs, serious AEs (SAEs), and severe AEs.
In Study DV625A0006, of all treatment cohorts, the cohort of 44 patients treated in the 50 mg EEDEV-3456 group had the fewest AEs, Grade ≥3 AEs, SAEs, and treatment discontinuations due to AEs, but still showed strong evidence of clinical activity. No dose-limiting toxicities (DLTs) were reported.
Efficacy data suggested that the 50mg and 100mg dose cohorts demonstrated optimal clinical activity, and the once daily dosing schedule gave the optimum risk:benefit profile.</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.4',
            text: 'End of Study Definition',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'End of Study Definition',
            value: `<p>A participant is considered to have completed the study if he/she has a disease progression event, as measured in Blind Independent Central Review using RECIST 1.1.  Patients without a progression event should continue to be tracked as per the Schedule of Activities for as long as they maintain their informed consent.
The end of the study is defined as the date of analysis for the primary PFS endpoint, which will occur when approximately 260 disease progression events have been recorded across treatment arms.</p>`,
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '4',
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
        number: '4',
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
