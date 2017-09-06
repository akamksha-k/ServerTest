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
            number: '8.',
            text: 'Study Assessments and Procedures',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Study_Intervention_fullText',
            value: `
<ul><li><strong>Study procedures and their timing are summarized in the SoA. Protocol waivers or exemptions are not allowed.</strong></li>
<li><strong>Immediate safety concerns should be discussed with the sponsor immediately upon occurrence or awareness to determine if the participant should continue or discontinue study intervention.</strong></li>
<li><strong>Adherence to the study design requirements, including those specified in the SoA, is essential and required for study conduct.</strong></li>
<li><strong>All screening evaluations must be completed and reviewed to confirm that potential participants meet all eligibility criteria. The investigator will maintain a screening log to record details of all participants screened and to confirm eligibility or record reasons for screening failure, as applicable. </strong></li>
<li><strong>Procedures conducted as part of the participant’s routine clinical management (eg, blood count) and obtained before signing of the ICF may be utilized for screening or baseline purposes provided the procedures met the protocol-specified criteria and were performed within the time frame defined in the SoA.</strong></li>
<li><strong>[The maximum amount of blood collected from each participant over the duration of the study, including any extra assessments that may be required, will not exceed [X] mL.] Repeat or unscheduled samples may be taken for safety reasons or for technical issues with the samples.]</strong></li></ul>
            `,
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
            value: '',
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
            value: '',
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
            value: `
  <ul><li>A complete physical examination will include, at a minimum, assessments of the Cardiovascular, Respiratory, Gastrointestinal and Neurological systems. Height and weight will also be measured and recorded.</li>
  <li>A brief physical examination will include, at a minimum, assessments of the [skin, lungs, cardiovascular system, and abdomen (liver and spleen)].</li>
  <li>Investigators should pay special attention to clinical signs related to previous serious illnesses</li></ul>
            `,
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
            value: `
<ul><li>[Oral] [Tympanic] [Rectal] [Axillary] [Skin] [Temporal Artery] temperature, pulse rate, respiratory rate, and blood pressure will be assessed.</li>
<li>Blood pressure and pulse measurements will be assessed [specify participant's position, if applicable] with a completely automated device. Manual techniques will be used only if an automated device is not available.</li>
<li>Blood pressure and pulse measurements should be preceded by at least 5 minutes of rest for the participant in a quiet setting without distractions (eg, television, cell phones).</li>
<li>Vital signs (to be taken before blood collection for laboratory tests) will consist of 1 pulse and 3 blood pressure measurements (3 consecutive blood pressure readings will be recorded at intervals of at least 1 minute). The average of the 3 blood pressure readings will be recorded on the CRF.<br />
OR<br />
Vital signs will be measured in a semi-supine position after 5 minutes rest and will include temperature, systolic and diastolic blood pressure, and pulse [and respiratory rate]. [Three readings of blood pressure and pulse will be taken. The first reading should be rejected. The second and third readings should be averaged to give the measurement to be recorded in the CRF.]</li></ul>
            `,
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
            value: `
<ul><li>[Triplicate OR Single] 12-lead ECG will be obtained as outlined in the SoA (see Section 1.3) using an ECG machine that automatically calculates the heart rate and measures PR, QRS, QT, and [QTc] intervals. Refer to Section 7 for [QTc] withdrawal criteria and any additional [QTc] readings that may be necessary.</li>
<li>At each time point at which triplicate ECG are required, 3 individual ECG tracings should be obtained as closely as possible in succession, but no more than 2 minutes apart. The full set of triplicates should be completed in less than 4 minutes.</li></ul>
            `,
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
            value: `
<ul><li>See Appendix 2 for the list of clinical laboratory tests to be performed and to the SoA for the timing and frequency. </li>
<li>The investigator must review the laboratory report, document this review, and record any clinically relevant changes occurring during the study in the AE section of the CRF. The laboratory reports must be filed with the source documents. Clinically significant abnormal laboratory findings are those which are not associated with the underlying disease, unless judged by the investigator to be more severe than expected for the participant's condition.</li>
<li>All laboratory tests with values considered clinically significantly abnormal during participation in the study or within [insert timeframe] after the last dose of study intervention should be repeated until the values return to normal or baseline or are no longer considered clinically significant by the investigator or medical monitor.
  <ul><li>If such values do not return to normal/baseline within a period of time judged reasonable by the investigator, the etiology should be identified and the sponsor notified.</li>
  <li>All protocol-required laboratory assessments, as defined in Appendix 2, must be conducted in accordance with the laboratory manual and the SoA. </li>
  <li>If laboratory values from non-protocol specified laboratory assessments performed at the institution’s local laboratory require a change in participant management or are considered clinically significant by the investigator (eg, SAE or AE or dose modification), then the results must be recorded in the CRF.</li></ul>
</li></ul>
            `,
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
            value: '',
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
            value: `
<p>The definitions of an AE or SAE can be found in Appendix 3.</p>
<p>AE will be reported by the participant (or, when appropriate, by a caregiver, surrogate, or the participant's legally authorized representative). </p>
<p>The investigator and any qualified designees are responsible for detecting, documenting, and recording events that meet the definition of an AE or SAE and remain responsible for following up AEs that are serious, considered related to the study intervention or study procedures, or that caused the participant to discontinue the [study intervention] [study] (see Section 7)</p>
            `,
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
            value: `
<p>All SAEs will be collected from the [signing of the informed consent form (ICF)] OR [start of intervention] until [the follow-up visit] at the time points specified in the SoA (Section 1.3).</p>
<p>All AE will be collected from the [signing of the ICF] OR [start of intervention] until [the follow up visit] at the time points specified in the SoA (Section 1.3).</p>
<p>Medical occurrences that begin before the start of study intervention but after obtaining informed consent will be recorded on the Medical History/Current Medical Conditions section of the case report form (CRF) not the AE section.</p>
<p>All SAEs will be recorded and reported to the sponsor or designee within 24 hours, as indicated in Appendix 3. The investigator will submit any updated SAE data to the sponsor within 24 hours of it being available.</p>
<p>Investigators are not obligated to actively seek AE or SAE after conclusion of the study participation. However, if the investigator learns of any SAE, including a death, at any time after a participant has been discharged from the study, and he/she considers the event to be reasonably related to the study intervention or study participation, the investigator must promptly notify the sponsor.</p>
<p>The method of recording, evaluating, and assessing causality of AE and SAE and the procedures for completing and transmitting SAE reports are provided in Appendix 3.</p>
            `,
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
            value: `
<p>After the initial AE/SAE report, the investigator is required to proactively follow each participant at subsequent visits/contacts. All SAEs, [and non-serious AEs of special interest (as defined in Section [X]), will be followed until resolution, stabilization, the event is otherwise explained, or the participant is lost to follow-up (as defined in Section 7.3).</p>
<p>Further information on follow-up procedures is given in Appendix 3.</p>
            `,
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
            value: `
<ul><li>Prompt notification by the investigator to the sponsor of a SAE is essential so that legal obligations and ethical responsibilities towards the safety of participants and the safety of a study intervention under clinical investigation are met. </li>
<li>The sponsor has a legal responsibility to notify both the local regulatory authority and other regulatory agencies about the safety of a study intervention under clinical investigation. The sponsor will comply with country-specific regulatory requirements relating to safety reporting to the regulatory authority, Institutional Review Boards (IRB)/Independent Ethics Committees (IEC), and investigators.</li>
<li>Investigator safety reports must be prepared for suspected unexpected serious adverse reactions (SUSAR) according to local regulatory requirements and sponsor policy and forwarded to investigators as necessary.</li>
<li>An investigator who receives an investigator safety report describing a SAE or other specific safety information (eg, summary or listing of SAEs) from the sponsor will review and then file it along with the Investigator’s Brochure and will notify the IRB/IEC, if appropriate according to local requirements.</li></ul>
            `,
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
            value: `
<ul><li>Details of all pregnancies in [female participants and, if indicated, female partners of male participants] will be collected after the start of study intervention and until [insert time period that is at least 5 terminal half-lives after the last dose].</li>
<li>If a pregnancy is reported, the investigator should inform the sponsor within [24 hours] of learning of the pregnancy and should follow the procedures outlined in Appendix 4.</li>
<li>Abnormal pregnancy outcomes (eg, spontaneous abortion, fetal death, stillbirth, congenital anomalies, ectopic pregnancy) are considered SAEs.</li></ul>
            `,
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
            value: '',
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
            value: `
<p>The following disease related events (DREs) are common in participants with [disease, condition under study] and can be serious/life threatening:</p>
<ul><li>Event A</li>
<li>Event B</li>
<li>Event C</li>
<li>Event D</li></ul>
<p>Because these events are typically associated with the disease under study, they will not be reported according to the standard process for expedited reporting of SAEs even though the event may meet the definition of a SAE. These events will be recorded on the [corresponding CRF] page in the participant’s CRF within [the appropriate time frame]. [These DREs will be monitored by a/an [independent Data Monitoring Committee, Safety Review Committee, Safety Review Team, other] on a routine basis.]</p>
<p>NOTE: However, if either of the following conditions applies, then the event must be recorded and reported as an SAE (instead of a DRE): </p>
<ul><li>The event is, in the investigator’s opinion, of greater intensity, frequency, or duration than expected for the individual participant. <br />
OR<br />
The investigator considers that there is a reasonable possibility that the event was related to study intervention.</li></ul>
"
            `,
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
            value: `
<p>Medical devices are being provided for use in this study [for the purposes of xxxx]. In order to fulfill regulatory reporting obligations worldwide, the investigator is responsible for the detection and documentation of events meeting the definitions of incident or malfunction that occur during the study with such devices. </p>
<p>The definition of a Medical Device Incident can be found in Appendix 7.</p>
<p>NOTE: Incidents fulfilling the definition of an AE/SAE will also follow the processes outlined in Section 8.3.3 and Appendix 3 of the protocol. </p>

<p><strong>8.3.8.1. Time Period for Detecting Medical Device Incidents</strong></p>
<ul><li>Medical device incidents or malfunctions of the device that result in an incident will be detected, documented, and reported during all periods of the study in which the medical device is used. </li>
<li>If the investigator learns of any incident at any time after a participant has been discharged from the study, and such incident is considered reasonably related to a medical device provided for the study, the investigator will promptly notify the sponsor.</li></ul>
The method of documenting Medical Device Incidents is provided in Appendix 7.

<p><strong>8.3.8.2. Follow-up of Medical Device Incidents</strong></p>
<ul><li>All medical device incidents involving an AE will be followed and reported in the same manner as other AEs (see Section 8.3.3).This applies to all participants, including those who discontinue study intervention.</li>
<li>The investigator is responsible for ensuring that follow-up includes any supplemental investigations as indicated to elucidate the nature and/or causality of the incident.</li>
<li>New or updated information will be recorded on the originally completed form with all changes signed and dated by the investigator.</li></ul>

<p><strong>8.3.8.3. Prompt Reporting of Medical Device Incidents to Sponsor</strong></p>
<ul><li>Medical device incidents will be reported to the sponsor within 24 hours after the investigator determines that the event meets the protocol definition of a medical device incident.</li>
<li>The Medical Device Incident Report Form will be sent to the sponsor by [method]. If [method] is unavailable, then [alternative method] should be utilized.</li></ul>
<li>The same individual will be the contact for the receipt of medical device reports and SAE.</li>

<p><strong>8.3.8.4. Regulatory Reporting Requirements for Medical Device Incidents</strong></p>
<ul><li>The investigator will promptly report all incidents occurring with any medical device provided for use in the study in order for the sponsor to fulfill the legal responsibility to notify appropriate regulatory authorities and other entities about certain safety information relating to medical devices being used in clinical studies.</li>
<li>The investigator, or responsible person according to local requirements (eg, the head of the medical institution), will comply with the applicable local regulatory requirements relating to the reporting of incidents to the IRB/IEC.</li></ul>
            `,
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
            value: `
<p>For this study, any dose of [study intervention] greater than [insert daily dose of study intervention] within a 24-hour time period [+/- X hours] will be considered an overdose.</p>
<p>[Sponsor] does not recommend specific treatment for an overdose] OR [The antidote to study intervention is YYY] and may be used in case of overdose.</p>

<p>In the event of an overdose, the [investigator/treating physician] should:</p>
<ol><li>Contact the Medical Monitor immediately.</li>
<li>Closely monitor the participant for any AE/SAE and laboratory abnormalities until [study intervention] can no longer be detected systemically (at least [x] days).</li>
<li>Obtain a plasma sample for PK analysis within [x] days from the date of the last dose of study intervention if requested by the Medical Monitor (determined on a case-by-case basis).</li>
<li>Document the quantity of the excess dose as well as the duration of the overdose in the CRF.</li></ol>
<p>Decisions regarding dose interruptions or modifications will be made by the investigator in consultation with the Medical Monitor based on the clinical evaluation of the participant.</p>
            `,
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
            value: `
<ul><li>Whole blood samples of approximately 10 mL will be collected for measurement of whole blood concentrations of EEDEV-3456 as specified in the SoA =. A maximum of 3 samples may be collected at additional time points during the study if warranted and agreed upon between the investigator and the sponsor. Instructions for the collection and handling of biological samples will be provided by the sponsor. The actual date and time (24-hour clock time) of each sample will be recorded.</li>
<li>Samples will be used to evaluate the PK of EEDEV-3456. Samples collected for analyses of EEDEV-3456 whole blood) concentration may also be used to evaluate safety or efficacy aspects related to concerns arising during or after the study.</li>
<li>Genetic analyses will not be performed on these whole blood samples. Participant confidentiality will be maintained.</li></ul>
<p>Drug concentration information that may unblind the study will not be reported to investigative sites or blinded personnel until the study has been unblended.</p>
            `,
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
            value: `
<p>Pharmacodynamic parameters are not evaluated in this study.</p>
<p>Venous blood samples of approximately [X] mL will be collected for measurement of [X] at [specify time points only if not obvious in the SoA].</p>
<p>Urine samples will be collected for measurement of [X] at [specify time points only if not obvious in the SoA].</p>
            `,
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
            value: `
<p>Genetics are not evaluated in this study.</p>
<p>A [X] mL [blood OR saliva] sample for DNA isolation will be collected from participants who have consented to participate in the genetic analysis component of the study. Participation is optional. Participants who do not wish to participate in the genetic research may still participate in the study.</p>
<p>In the event of DNA extraction failure, a replacement genetic blood sample may be requested from the participant. Signed informed consent will be required to obtain a replacement sample unless it was included in the original consent.</p>
<p>[See Appendix X for Information regarding genetic research]. Details on processes for collection and shipment and destruction of these samples can be found in [specify location].</p>
            `,
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
            value: `
<p>Biomarkers are not evaluated in this study.</p>
<p>OR</p>
<p>Collection of samples for other biomarker research is also part of this study. The following samples for biomarker research are required and will be collected from all participants in this study as specified in the SoA:</p>
<ul><li>[blood/saliva]</li>
<li>[other required biomarker sample]</li></ul>
<p>Optional samples for biomarker research that should be collected from participants in the study where possible are the following:</p>
<ul><li>[optional biomarker sample]</li></ul>
<p>OR</p>
<ul><li>Samples will be tested for [protocol-specific objective] to evaluate their association with the observed clinical responses [protocol-specific response] to [study intervention].</li>
<li>In addition, samples will be stored and analysis may be performed on biomarker variants thought to play a role in [protocol-specific rationale] including, but not limited to, [specific candidate genes/genome-wide analysis for RNA, serum analytes, or tissue biomarkers] to evaluate their association with observed clinical responses to [study intervention].</li></ul>
<p>Other samples may be used for research to [develop methods, assays, prognostics and/or companion diagnostics] related to [specify the intervention target, disease process, pathways associated with disease state, and/or mechanism of action of the study intervention].</p>
<p>Samples may be stored for a maximum of [X] years (or according to local regulations) following the last participant’s last visit for the study at a facility selected by the sponsor to enable further analysis of biomarker responses to [study intervention]. </p>
            `,
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
            value: `
<p>[Medical resource utilization] [and] [health economics] data, associated with medical encounters, will be collected in the CRF by the investigator and study-site personnel for all participants throughout the study. Protocol-mandated procedures, tests, and encounters are excluded. </p>
<p>The data collected may be used to conduct exploratory economic analyses and will include:</p>
<ul><li>Number and duration of medical care encounters, including surgeries, and other selected procedures (inpatient and outpatient)</li>
<li>Duration of hospitalization (total days or length of stay, including duration by wards [eg, intensive care unit])</li>
<li>Number and type of diagnostic and therapeutic tests and procedures</li>
<li>Outpatient medical encounters and treatments (including physician or emergency room visits, tests and procedures, and medications).</li></ul>
            `,
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '8',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 8 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '8',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 8 structure');
        });
    });
  },
};
