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
            number: '9.1',
            text: 'Statistical Hypotheses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Statistical_Hypotheses_fullText',
            value:
              '<p>The statistical analysis will test the following hypotheses:                  H0: No difference between EEDEV-3456 and Standard of Care                     H1: Difference between EEDEV-3456 and Standard of Care  </p> <p>                      The study has been sized to test the hypotheses using the primary endpoint of Progression Free Survival.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.2',
            text: 'Sample Size Determination',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Sample_Size_Determination_fullText',
            value:
              '<p>Approximately 1200 participants will be screened to achieve 980 randomly assigned to study intervention and 960 evaluable participants for an estimated total of 480 evaluable participants per intervention group.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.3',
            text: 'Populations for Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Populations_for_Analyses_fullText',
            value:
              '<p>For purposes of analysis, the following populations are defined:              Enrolled: All participants who sign the ICF                           Randomly Assigned to Study Intervention: All participants randomly assigned to study intervention regardless of the intervention they actually receive  Evaluable: All participants randomly assigned to study intervention who follow the study protocol to discontinuation with no deviations        Safety: All participants randomly assigned to study intervention and who take at least 1 dose of study intervention. Participants will be analyzed according to the intervention they actually receive.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4',
            text: 'Statistical Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'statistical_analyses_fullText',
            value:
              '<p>The statistical analysis plan will be developed and finalized before database lock and will describe the participant populations to be included in the analyses, and procedures for accounting for missing, unused, and spurious data. This section is a summary of the planned statistical analyses of the primary and secondary endpoints.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4.1',
            text: 'Efficacy Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Efficacy_analyses_fullText',
            value:
              '<p>Primary Endpoint - Progression Free Survival Statistical Analysis Method: Analysis will be conducted when approximately 260 PFS endpoint events have been recorded across the treatment arms.PFS (per RECIST 1.1 using BICR assessments) will be defined as the time from the date of randomization until the date of objective disease progression or death (by any cause in the absence of progression) regardless of whether the patient withdraws from randomized therapy or receives another anticancer therapy prior to progression. Patients who have not progressed or died at the time of analysis will be censored at the time of the latest date of assessment from their last evaluable RECIST 1.1 assessment. However, if the patient progresses or dies after 2 or more missed visits, the patient will be censored at the time of the latest evaluable RECIST 1.1 assessment. If the patient has no evaluable visits or does not have baseline data, they will be censored at 0 days unless they die within 2 visits of baseline.  Secondary Endpoint – Overall Survival Statistical Analysis Method: Overall Survival is defined as the time from the date of randomization until death due to any cause. Any patient not known to have died at the time of analysis will be censored based on the last recorded date on which the patient was known to be alive.                       Secondary Endpoint – Objective Response Rate                       Statistical Analysis Method: Objective Response Rate is defined as the number (%) of patients with at least 1 visit response of CR or PR. Data obtained up until progression, or the last evaluable assessment in the absence of progression, will be included in the assessment of ORR. Patients who go off treatment without progression, receive a subsequent therapy, and then respond will not be included as responders in the ORR.                        Secondary Endpoint – Duration of Response                                   Statistical Analysis Method: Duration of Response is defined as the time from the date of first documented response until the first date of documented progression or death in the absence of disease progression. The end of response should coincide with the date of progression or death from any cause used for the RECIST 1.1 PFS endpoint.                                        The time of the initial response will be defined as the latest of the dates contributing towards the first visit response of CR or PR. If a patient does not progress following a response, then their DoR will be censored at the PFS censoring time. DoR will not be defined for those patients who do not have documented response.                                                  Secondary Endpoint – Best Objective Response                                  Statistical Analysis Method: Best Objective Response is calculated as the best response a patient has had during their time in the study up until RECIST progression or the last evaluable assessment in the absence of RECIST progression.                                                                BoR will be determined programmatically based on RECIST 1.1 using all BICR assessments up until the first progression event. For patients whose progression event is death, BoR will be calculated based upon all evaluable RECIST 1.1 assessments prior to death.                               Exploratory Endpoints                                                         The Statistical Analysis Method(s) will be described in the Statistical Analysis Plan, finalized before database lock.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4.2',
            text: 'Safety Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'safety_analyses_fullText',
            value:
              '<p>All safety analyses will be performed on the Safety Population.Data from all cycles of treatment will be combined in the presentation of safety data. AEs (both in terms of Medical Dictionary for Regulatory Activities [MedDRA] preferred terms and CTCAE grade) will be listed individually by patient.  For the change from baseline summaries for vital signs, laboratory data, ECGs, and physical examination, the baseline value will be the latest result obtained prior to the start of study treatment.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4.3',
            text: 'Other Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Other_analyses_fullText',
            value:
              '<p>PK, pharmacodynamic, and biomarker exploratory analyses will be described in the statistical analysis plan finalized before database lock. The population PK analysis and pharmacodynamic analyses will be presented separately from the main clinical study report (CSR).</p> ',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.5',
            text: 'Interim Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'interim_analyses_fullText',
            value:
              '<p>Two Overall Survival interim analyses will be performed for superiority; the first one at the time of the primary PFS analysis and the second one when approximately 80% of the final number of deaths has been reached. These analyses will be performed by an Independent DMC.The Statistical Analysis Plan will describe the planned interim analyses in greater detail.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.5.1',
            text: 'Data Monitoring Committee (DMC)',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'data_monitoring_committee_fullText',
            value:
              '<p>Interim monitoring for safety will be conducted by the DMC. Details of the plan and communication process will be provided in the statistical analysis plan and the DMC charter.</p>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '9',
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
        number: '9',
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
