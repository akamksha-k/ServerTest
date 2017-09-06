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
            number: '8.',
            text: 'Study Assessments and Procedures',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Study_Intervention_fullText',
            value: '<ul><li>Study procedures and their timing are summarized in the SoA. Protocol waivers or exemptions are not allowed.</li><li> Immediate safety concerns should be discussed with the sponsor immediately upon occurrence or awareness to determine if the participant should continue or discontinue study intervention.</li><li>Adherence to the study design requirements, including those specified in the SoA, is essential and required for study conduct.</li><li>All screening evaluations must be completed and reviewed to confirm that potential participants meet all eligibility criteria. The investigator will maintain a screening log to record details of all participants screened and to confirm eligibility or record reasons for screening failure, as applicable. </li><li>Procedures conducted as part of the participant’s routine clinical management (eg, blood count) and obtained before signing of the ICF may be utilized for screening or baseline purposes provided the procedures met the protocol-specified criteria and were performed within the time frame defined in the SoA.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.1.',
            text: 'Efficacy Assessments ',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'efficacy_fullText',
            value: '<p><strong>RECIST 1.1 criteria will be used to assess patient response to treatment by determining PFS, ORR, and DoR in BICR assessments (primary), and using Investigator assessments for sensitivity analysis.</strong></p><p><strong>If a patient discontinues treatment (and/or receives a subsequent anticancer therapy) prior to progression, then the patient should still continue to be followed until confirmed objective disease progression.</strong></p><p><strong>Categorization of objective tumor response assessment will be based on the RECIST 1.1 criteria of response: CR, PR, SD, and PD. Target lesion progression will be calculated in comparison to when the tumor burden was at a minimum (ie, smallest sum of diameters previously recorded on study). In the absence of progression, tumor response (CR or PR) and SD will be calculated in comparison to the baseline tumor measurements obtained before starting treatment.</strong></p><p><strong>Following confirmed progression, patients should continue to be followed up for survival every 1 to 2 months as outlined in the study plan. Subsequent anticancer therapy information will be collected at the timepoints indicated in the study plan. Survival information may be obtained via telephone contact with the patient, patient’s family, or by contact with the patient’s current physician.</strong></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.',
            text: 'Safety Assessments',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'safety_assessments_fullText',
            value: '<p><strong>Planned time points for all safety assessments are provided in the SoA.</strong></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.1',
            text: 'Physical Examinations',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'physical_exam_fullText',
            value: '<ul><li>A complete physical examination will include, at a minimum, assessments of the Cardiovascular, Respiratory, Gastrointestinal and Neurological systems. Height and weight will also be measured and recorded.</li><li>A brief physical examination will include, at a minimum, assessments of the skin, lungs, cardiovascular system, and abdomen (liver and spleen).</li><li>Investigators should pay special attention to clinical signs related to previous serious illnesses</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.2',
            text: 'Vital Signs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'vital_signs_fullText',
            value: '<ul><li>Oral temperature, pulse rate, respiratory rate, and blood pressure will be assessed.</li><li>Supine or semi-supine Blood pressure and pulse measurements will be assessed with a completely automated device. Manual techniques will be used only if an automated device is not available.</li><li>Blood pressure and pulse measurements should be preceded by at least 5 minutes of rest for the participant in a quiet setting without distractions (eg, television, cell phones).</li><li>Vital signs (to be taken before blood collection for laboratory tests) will consist of 1 pulse and 3 blood pressure measurements (3 consecutive blood pressure readings will be recorded at intervals of at least 1 minute). The average of the 3 blood pressure readings will be recorded on the CRF.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.3',
            text: 'Electrocardiograms',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'electrocardiograms_fullText',
            value: '<ul><li>Triplicate 12-lead ECG will be obtained as outlined in the SoA (see Section 1.3) using an ECG machine that automatically calculates the heart rate and measures PR, QRS, QT, and QTc intervals. Refer to Section 7 for QTc withdrawal criteria and any additional [Tc readings that may be necessary.</li><li>At each time point at which triplicate ECG are required, 3 individual ECG tracings should be obtained as closely as possible in succession, but no more than 2 minutes apart. The full set of triplicates should be completed in less than 4 minutes.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.4',
            text: 'Clinical Safety Laboratory Assessments',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'clinic_safety_lab_fullText',
            value: "<ul><li>See Appendix 2 for the list of clinical laboratory tests to be performed and to the SoA for the timing and frequency.</li><li>The investigator must review the laboratory report, document this review, and record any clinically relevant changes occurring during the study in the AE section of the CRF. The laboratory reports must be filed with the source documents. Clinically significant abnormal laboratory findings are those which are not associated with the underlying disease, unless judged by the investigator to be more severe than expected for the participant's condition.</li><li>All laboratory tests with values considered clinically significantly abnormal during participation in the study or within 10 days after the last dose of study intervention should be repeated until the values return to normal or baseline or are no longer considered clinically significant by the investigator or medical monitor.</li><li>If such values do not return to normal/baseline within a period of time judged reasonable by the investigator, the etiology should be identified and the sponsor notified.</li><li>All protocol-required laboratory assessments, as defined in Appendix 2, must be conducted in accordance with the laboratory manual and the SoA.</li><li>If laboratory values from non-protocol specified laboratory assessments performed at the institution’s local laboratory require a change in participant management or are considered clinically significant by the investigator (eg, SAE or AE or dose modification), then the results must be recorded in the CRF.</li></ul>",
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.5',
            text: 'Suicidal Risk Monitoring',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'suicidal_risk_fullText',
            value: '<p>Participants being treated with EEDEV-3456 should be monitored appropriately and observed closely for suicidal ideation and behavior or any other unusual changes in behavior. Consideration should be given to discontinuing EEDEV-3456 in participants who experience signs of suicidal ideation or behavior.</p><p>Families and caregivers of participants being treated with EEDEV-3456 should be instructed to monitor participants for the emergence of unusual changes in behavior, as well as the emergence of suicidal ideation and behavior, and to report such symptoms immediately to the study investigator.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3',
            text: 'Adverse Events and Serious Adverse Events',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'adverse_events_fullText',
            value: "<p>The definitions of an AE or SAE can be found in Appendix 3.</p><p>AE will be reported by the participant (or, when appropriate, by a caregiver, surrogate, or the participant's legally authorized representative).</p><p>The investigator and any qualified designees are responsible for detecting, documenting, and recording events that meet the definition of an AE or SAE and remain responsible for following up AEs that are serious, considered related to the study intervention or study procedures, or that caused the participant to discontinue the study intervention (see Section 7).</p>",
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.1',
            text: 'Time Period and Frequency for Collecting AE and SAE Information',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'collect_ae_sae_fullText',
            value: '<p>All SAEs will be collected from the signing of the informed consent form (ICF) until follow up is completed, at the time points specified in the SoA (Section 1.3).</p><p>All AE will be collected from the signing of the ICF until follow up is completed, at the time points specified in the SoA (Section 1.3).</p><p>Medical occurrences that begin before the start of study intervention but after obtaining informed consent will be recorded on the Medical History/Current Medical Conditions section of the case report form (CRF) not the AE section.</p><p>All SAEs will be recorded and reported to the sponsor or designee within 24 hours, as indicated in Appendix 3. The investigator will submit any updated SAE data to the sponsor within 24 hours of it being available.</p><p>Investigators are not obligated to actively seek AE or SAE after conclusion of the study participation. However, if the investigator learns of any SAE, including a death, at any time after a participant has been discharged from the study, and he/she considers the event to be reasonably related to the study intervention or study participation, the investigator must promptly notify the sponsor.</p><p>The method of recording, evaluating, and assessing causality of AE and SAE and the procedures for completing and transmitting SAE reports are provided in Appendix 3.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.2',
            text: 'Method of Detecting AEs and SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'meathod_detect_sae_fullText',
            value: '<p>Care will be taken not to introduce bias when detecting AEs and/or SAEs. Open-ended and non leading verbal questioning of the participant is the preferred method to inquire about AE occurrences. </p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.3',
            text: 'Follow-up of AEs and SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'followUp_sae_fullText',
            value: '<p>After the initial AE/SAE report, the investigator is required to proactively follow each participant at subsequent visits/contacts. All SAEs will be followed until resolution, stabilization, the event is otherwise explained, or the participant is lost to follow-up (as defined in Section 7.3). Further information on follow-up procedures is given in Appendix 3.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.4',
            text: 'Regulatory Reporting Requirements for SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'regulatory_req_fullText',
            value: '<ul><li>Prompt notification by the investigator to the sponsor of a SAE is essential so that legal obligations and ethical responsibilities towards the safety of participants and the safety of a study intervention under clinical investigation are met. </li><li>The sponsor has a legal responsibility to notify both the local regulatory authority and other regulatory agencies about the safety of a study intervention under clinical investigation. The sponsor will comply with country-specific regulatory requirements relating to safety reporting to the regulatory authority, Institutional Review Boards (IRB)/Independent Ethics Committees (IEC), and investigators.</li><li>Investigator safety reports must be prepared for suspected unexpected serious adverse reactions (SUSAR) according to local regulatory requirements and sponsor policy and forwarded to investigators as necessary.</li><li>An investigator who receives an investigator safety report describing a SAE or other specific safety information (eg, summary or listing of SAEs) from the sponsor will review and then file it along with the Investigator’s Brochure and will notify the IRB/IEC, if appropriate according to local requirements.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.5',
            text: 'Pregnancy',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'pregnancy_fullText',
            value: '<ul><li>Details of all pregnancies in female participants and female partners of male participants will be collected after the start of study intervention and until 90 days after the last dose.</li><li>If a pregnancy is reported, the investigator should inform the sponsor within 24 hours of learning of the pregnancy and should follow the procedures outlined in Appendix 4.</li><li>Abnormal pregnancy outcomes (eg, spontaneous abortion, fetal death, stillbirth, congenital anomalies, ectopic pregnancy) are considered SAEs</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.6',
            text: 'Cardiovascular and Death Events',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'cardio_death_fullText',
            value: '<p>Cardiovascular events should be assessed and recorded as an Adverse Event or Serious Adverse Event, following the procedures detailed in Appendix 3.</p><p>Death due to progression of disease is the primary endpoint for this study and should be recorded on the corresponding CRF.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.7',
            text: 'Disease-Related Events and/or Disease-Related Outcomes Not Qualifying as AEs or SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'disease_sae_fullText',
            value: '<p>Not applicable, any disease related events (DREs) should continue to be reported using the standard AE and SAE reporting procedures. </p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.8',
            text: 'Medical Device Incidents (Including Malfunctions)',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'medical_device_fullText',
            value: '<p></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.4',
            text: 'Treatment of Overdose',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'overdose_treatmnt_fullText',
            value: '<p>For this study, any dose of 50 mg greater than 100 mg within a 24-hour time period  will be considered an overdose.</p><p>CogGen does not recommend specific treatment for an overdose.</p><p>In the event of an overdose, the treating physician should:</p><ol><li>Contact the Medical Monitor immediately.</li><li>Closely monitor the participant for any AE/SAE and laboratory abnormalities until the study intervention can no longer be detected systemically (at least 2 days).</li><li>Obtain a plasma sample for PK analysis within 2 days from the date of the last dose of study intervention if requested by the Medical Monitor (determined on a case-by-case basis).</li><li>Document the quantity of the excess dose as well as the duration of the overdose in the CRF.</li></ol><p>Decisions regarding dose interruptions or modifications will be made by the investigator in consultation with the Medical Monitor based on the clinical evaluation of the participant.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.5',
            text: 'Pharmacokinetics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'pharmacokinetics_fullText',
            value: '<ul><li>Whole blood samples of approximately 10 mL will be collected for measurement of whole blood concentrations of EEDEV-3456 as specified in the SoA =. A maximum of 3 samples may be collected at additional time points during the study if warranted and agreed upon between the investigator and the sponsor. Instructions for the collection and handling of biological samples will be provided by the sponsor. The actual date and time (24-hour clock time) of each sample will be recorded.</li><li>Samples will be used to evaluate the PK of EEDEV-3456. Samples collected for analyses of EEDEV-3456 whole blood) concentration may also be used to evaluate safety or efficacy aspects related to concerns arising during or after the study.</li><li>Genetic analyses will not be performed on these whole blood samples. Participant confidentiality will be maintained.</li></ul><p>Drug concentration information that may unblind the study will not be reported to investigative sites or blinded personnel until the study has been unblended.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.6',
            text: 'Pharmacodynamics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'pharmacodynamics_fullText',
            value: '<p>Pharmacodynamic parameters are not evaluated in this study.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.7',
            text: 'Genetics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'genetics_fullText',
            value: '<p>Genetics are not evaluated in this study.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.8.',
            text: 'Biomarkers',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'biomarkers_fullText',
            value: '<ul><li>Optional blood samples for biomarker research may be collected from participants in the study</li><li>Other samples may be used for research to develop methods, assays, prognostics and/or companion diagnostics related to EGFR inhibition pathways.</li></ul><p>Samples may be stored for a maximum of 15 years (or according to local regulations) following the last participant’s last visit for the study at a facility selected by the sponsor to enable further analysis of biomarker responses to EEDEV-3456Biomarkers are not evaluated in this study</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.9',
            text: 'Medical Resource Utilization and Health Economics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'resource_utilization_fullText',
            value: '<p>Medical resource utilization and health economics data, associated with medical encounters, will be collected in the CRF by the investigator and study-site personnel for all participants throughout the study. Protocol-mandated procedures, tests, and encounters are excluded. \nThe data collected may be used to conduct exploratory economic analyses and will include:</p><ul><li>Number and duration of medical care encounters, including surgeries, and other selected procedures (inpatient and outpatient)</li><li>Duration of hospitalization (total days or length of stay, including duration by wards [eg, intensive care unit])</li><li>Number and type of diagnostic and therapeutic tests and procedures</li><li>Outpatient medical encounters and treatments (including physician or emergency room visits, tests and procedures, and medications).</li></ul>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '8',
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
        number: '8',
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
