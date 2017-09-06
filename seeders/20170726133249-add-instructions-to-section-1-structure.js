'use strict';
const models = require('../models');
const TemplateSection = models.TemplateSection;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let sectionStructure = {
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
            instructions: '<p>The protocol synopsis is a short (1 to 2 pages) summary of the key points of the protocol. This section of the protocol should be completed after the main text to ensure consistency with the main text.</p><p>The purpose of the protocol synopsis is to provide a concise outline of the key aspects of the study. It may be used for European Union (EU) Clinical Trial Applications (CTA) and for other external bodies such as Institutional Review Boards [IRB]/Independent Ethics Committees [IEC]). Its level of detail should not dissuade/discourage the investigator from referring to the main text of the protocol.</p>',
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
            value: '',
            instructions: '<p>Briefly (1 paragraph) describe the study rationale and purpose. The synopsis text should be taken from the main text.</p>',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Objectives and Endpoints',
            value: '',
            instructions: '<p>State the primary and key secondary objectives and associated endpoints. Be consistent with the main text of the protocol in text and format.</p><p>Endpoints: This should be a high-level description.</p>',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Overall Design:',
            value: '',
            instructions: '<p>Be sure the text included in this section is consistent with the text in other sections such as inclusion/exclusion criteria and concomitant medications.</p><p>Briefly state:</p><ul><li>Type of design (eg, parallel, crossover, single group) and control method (eg, placebo, active comparator, low dose, historical, or none [uncontrolled]).</li><li>High-level description of the study population (eg, healthy volunteers, patients with acute lung injury, etc.).</li><li>Level and method of blinding (eg, open-label, single-blind, double-blind, double-blind [sponsor unblinded], matching placebo, double-dummy).</li><li>Study intervention assignment method (eg, randomization, stratification, both). Do NOT state block size. If assignment to intervention is by randomization, describe when randomization occurs relative to screening.</li><li>Use of an Independent Data Monitoring Committee, Dose Escalation Committee, or similar review group.</li></ul>',
          },
        },
        {
          type: 'FullText',
          options: {
            exampleText: true,
            formLabel: 'Number of Participants:',
            value: '<p>Approximately X participants will be screened to achieve X randomly assigned to study intervention and X evaluable participants for an estimated total of X evaluable participants per intervention group. <p/> A maximum of X participants will be randomly assigned to study intervention such that approximately Y evaluable participants complete the study.</p>',
            instructions: '<ul><li>State the expected number of participants to be randomized. If an event driven trial, state the number of events planned along with the number of participants randomized.</li><li>Ensure evaluable is clearly defined and cross reference Section 9 Statistical Considerations, if applicable.</li><li>Cross reference Section 9.2 Sample Size Determination and ensure that section clearly explains how screening failures and non-evaluable participants are defined.</li></ul>',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Intervention Groups and Duration:',
            value: '',
            instructions: '<p>Briefly state:</p><ul><li>Total duration of study participation for each participant with sequence and duration of study periods (eg, screening, run-in, fixed dose/titration, follow up/washout periods).</li><li>Dose regimens in each study period and stage (if applicable) including frequency (eg, twice daily) and route of administration and criteria for individualized dosing (eg, participant weight or plasma concentrations), if applicable.</li><li>Rules/procedures for any dose changes/adjustments including flexible dosing; dose reductions, interruptions, or tapering; temporary/permanent discontinuation; and any circumstances for resuming study intervention, as applicable.</li><li>Use of an Independent Data Monitoring Committee, Dose Escalation Committee, or similar review group</li></ul>',
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
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '1.3',
            text: 'Schedule of Activities (SoA)',
            instructions: '<p>General information:</p><ul><li>Ensure that only essential data are collected. The Schedule of Activities (SoA) is the primary location for specifying the timing of assessments at each stage of the study. Do not repeat the SoA schedule in the main text.</li><li>Visit windows may be necessary for the collection of efficacy or safety data. The acceptable windows can be indicated on the SoA by adding ± days to the Visit Day row.</li><li>If applicable, specify the order of assessments (eg, performing participant-recorded assessments before other assessments to reduce bias or performing electrocardiograms [ECG] or measuring vital signs before blood draws).</li><li>Notes/footnotes (relating to specific procedures) should be minimal, brief, and include key information. If additional details are needed, the notes should refer to the section in the protocol main text where details are provided. Note that Day 0 should not be used as a time point.</li><li>Combine assessments on consecutive weeks if they are identical and consider separate tables for separate phases of the study (eg, screening, intervention days, and follow-up). For a multiple part study, one SoA table for each part of the study is recommended.</li><li>An example of a SoA table is included. Modify as required.</li></ul>',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Activities',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '1',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 1 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '1',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 1 structure');
        });
    });
  },
};
