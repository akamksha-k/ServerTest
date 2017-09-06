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
            number: '2.',
            text: 'Introduction',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'introduction_fullText',
            value:
              '<p>EEDEV-3456 is a Tyrosine kinase inhibitor.  Tyrosine kinases are a part of many cell functions, including cell signaling, growth, and division. These enzymes may be too active or found at high levels in some types of cancer cells, and blocking them may help keep cancer cells from growing. EEDEV-3456 is being evaluated for its ability to inhibit the Epidermal Growth Factor Receptor (EGFR).  EGFRs are transmembrane receptors present on the cell membranes. They have an extracellular binding component, a transmembrane component and an intracellular tyrosine kinase component. EGFRs play an important role in controlling normal cell growth, apoptosis and other cellular functions. Mutations of EGFRs can lead to continual or abnormal activation of the receptors causing unregulated cell division, which can account for some types of cancers.Tyrosine kinase inhibitors like EEDEV-3456 bind to the tyrosine kinase domain in the epidermal growth factor receptor and stop the activity of the EGFR.  This can make it an effective targeted therapy to treat certain types of cancer.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '2.1',
            text: 'Study Rationale',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'study_rationale_fullText',
            value:
              '<p>Current therapies for advanced NSCLC have poor outcomes: The median Overall Survival figure is approximately 10 to 12 months. The 1-year survival rate is 30 to 40%. Only 17% of patients will survive beyond 5 years. Responses to traditional first-line systemic chemotherapy are approximately 20% to 30%, with most responses limited in duration. Systemic chemotherapy is associated with significant side effects, including neutropenia, nausea, vomiting and dehydration, and alopecia. There is still a significant unmet medical need for additional treatment options for use in this patient population. Based on the preliminary clinical efficacy and safety data for EEDEV-3456 observed in patients with NSCLC in Phase II studies DV625A0006 and DV625A0019, CogGen plans to further determine the activity of EEDEV-3456 as first-line treatment in patients with NSCLC. The study will seek to compare the activity of EEDEV-3456 compared to the current Standard of Care tyrosine kinase inhibitor. Efficacy, safety and tolerability will be assessed and compared.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '2.2',
            text: 'Background',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'background_fullText',
            value:
              '<p>Lung cancer continues to be the leading cause of cancer death worldwide. Among lung cancers, 80% are classified as non-small cell lung cancer (NSCLC) and are mostly diagnosed at an advanced stage (either locally advanced or metastatic disease). In the last few years, the discovery of the pivotal role in tumorigenesis of the Epidermal Growth Factor Receptor (EGFR) has provided a new class of targeted therapeutic agents: the EGFR tyrosine kinase inhibitors (EGFR-TKIs). Since the first reports of an association between somatic mutations in EGFR exons 19 and 21 and response to EGFR-TKIs, treatment of advanced NSCLC has changed dramatically. Histologic profile, clinical characteristics, and mutational profile of lung carcinoma have all been reported as predictive factors of response to EGFR-TKIs and other targeted therapies. In advanced NSCLC patients harboring EGFR mutations, the use of EGFR TKIs in first-line treatment has provided an unusually large progression-free survival (PFS) benefit with a negligible toxicity when compared with cytotoxic chemotherapy in controlled clinical trials.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '2.3',
            text: 'Benefit/Risk Assessment',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'benefit_risk_assessment_fullText',
            value:
              '<p>More detailed information about the known and expected benefits and risks and reasonably expected adverse events of EEDEV-3456 may be found in the Investigator’s Brochure.</p>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '2',
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
        number: '2',
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
