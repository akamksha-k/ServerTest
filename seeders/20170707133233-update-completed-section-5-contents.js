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
            number: '5.',
            text: 'Study Population',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Study Population',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.1',
            text: 'Inclusion Criteria',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Inclusion Criteria',
            value: `<p>Participants are eligible to be included in the study only if all of the following criteria apply:
Age
1. Participant must be 18 years of age or above, at the time of signing the informed consent.
Type of Participant and Disease Characteristics
2. Pathologically confirmed adenocarcinoma of the lung
3. Locally advanced or metastatic NSCLC, not amenable to curative surgery or radiotherapy.
4. The tumour harbours one of the 2 common EGFR mutations known to be associated with EGFR-TKI sensitivity (Ex19del, L858R)
5. Mandatory provision of an unstained, archived tumour tissue sample in a quantity sufficient to allow for central analysis of EGFR mutation status
6. Patients must be treatment-naïve for locally advanced or metastatic NSCLC and eligible to receive first-line treatment with a standard of care tyrosine kinase inhibitor, as selected by the participating centre. Prior adjuvant and neo-adjuvant therapy is permitted (chemotherapy, radiotherapy, investigational agents)
Sex
7. Male or Female
a. Male participants:
• A male participant must agree to use contraception as detailed in Appendix 4 of this protocol during the treatment period and for at least 90 days after the last dose of study intervention and refrain from donating sperm during this period.
b. Female participants:
• A female participant is eligible to participate if she is not pregnant (see Appendix 4), not breastfeeding, and at least one of the following conditions applies:
i. Not a woman of childbearing potential (WOCBP) as defined in Appendix 4
OR
ii. A WOCBP who agrees to follow the contraceptive guidance in Appendix 4 during the treatment period and for at least 90 days after the last dose of study intervention.
Informed Consent
8. Capable of giving signed informed consent as described in Appendix 1 which includes compliance with the requirements and restrictions listed in the informed consent form (ICF) and in this protocol.</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.2',
            text: 'Exclusion Criteria',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Exclusion Criteria',
            value: `<p>Participants are excluded from the study if any of the following criteria apply:
Medical Conditions
1. Any concurrent and/or other active malignancy that has required treatment within 2 years of first dose of study drug.
2. Any evidence of severe or uncontrolled systemic diseases, including uncontrolled hypertension and active bleeding diatheses; or active infection including hepatitis B, hepatitis C and human immunodeficiency virus (HIV).
3. Refractory nausea and vomiting, chronic gastrointestinal diseases, inability to swallow the formulated product, or previous significant bowel resection that would preclude adequate absorption of EEDEV-3456
4. Any of the following cardiac criteria:
a. Mean resting corrected QT interval (QTc) >470 msec, obtained from 3 ECGs, using the screening clinic ECG machine-derived QTcF value.
b. Any clinically important abnormalities in rhythm, conduction, or morphology of resting ECG.
c. Any factors that increase the risk of QTc prolongation or risk of arrhythmic events or unexplained sudden death under 40 years of age in first-degree relatives or any concomitant medication known to prolong the QT interval
Prior/Concomitant Therapy
5. Treatment with any of the following:
a. Prior treatment with any systemic anti-cancer therapy for locally advanced/metastatic NSCLC.
b. Prior treatment with an EGFR-TKI.
c. Major surgery within 4 weeks of the first dose of study drug.
d. Radiotherapy treatment to more than 30% of the bone marrow or with a wide field of radiation within 4 weeks of the first dose of study drug.
e. Patients currently receiving medications or herbal supplements known to be potent inducers of cytochrome P450 (CYP) 3A4.
f. Alternative anti-cancer treatment
g. Treatment with an investigational drug within five half-lives of the compound or any of its related material.
Prior/Concurrent Clinical Study Experience
6. Involvement in the planning and/or conduct of the study, including both CogGen staff and Investigative site staff
7. Concurrent enrollment in another clinical study, unless it is an observational (non-interventional) clinical study or the follow-up period of an interventional study</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3',
            text: 'Lifestyle Considerations',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Lifestyle Considerations',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3.1',
            text: 'Meals and Dietary Restrictions',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Meals and Dietary Restrictions',
            value: `<p>1. Refrain from consumption of red wine, Seville oranges, grapefruit or grapefruit juice, from 7 days before the start of study intervention until after the final dose.</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3.2',
            text: 'Caffeine, Alcohol and Tobacco',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Caffeine, Alcohol and Tobacco',
            value: `<p>1. During each dosing session, participants will abstain from ingesting caffeine- or xanthine-containing products (eg, coffee, tea, cola drinks, and chocolate) for 12 hours before the start of dosing until after collection of the final pharmacokinetic (PK) and/or pharmacodynamic sample.
2. During each dosing session, participants will abstain from alcohol for 24 hours before the start of dosing until after collection of the final PK and/or pharmacodynamic sample.
3. Use of tobacco products will not be allowed from screening until after the final follow-up visit.</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3.3',
            text: 'Activity',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Activity',
            value: `<p>1. Participants will abstain from strenuous exercise for 12 hours before each blood collection for clinical laboratory tests. Participants may participate in light recreational activities during studies (eg, watching television, reading).</p>`,
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.4',
            text: 'Screen Failures',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Screen Failures',
            value: `<p>Screen failures are defined as participants who consent to participate in the clinical study but are not subsequently randomly assigned to study intervention. A minimal set of screen failure information is required to ensure transparent reporting of screen failure participants to meet the Consolidated Standards of Reporting Trials (CONSORT) publishing requirements and to respond to queries from regulatory authorities. Minimal information includes demography, screen failure details, eligibility criteria, and any serious adverse event (SAE).</p>

<p>Individuals who do not meet the criteria for participation in this study (screen failure) may not be rescreened. </p>`,
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '5',
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
        number: '5',
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
