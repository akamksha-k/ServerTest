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
            number: '10.',
            text: 'Supporting Documentation and Operational Considerations',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1',
            text:
              'Appendix 1: Regulatory, Ethical, and Study Oversight Considerations',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.1',
            text: 'Regulatory and Ethical Considerations',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'regulatory_ethical_fullText',
            value:
              '<ul><li>This study will be conducted in accordance with the protocol and with the following:</li><li>Consensus ethical principles derived from international guidelines including the Declaration of Helsinki and Council for International Organizations of Medical Sciences (CIOMS) International Ethical Guidelines</li><li>Applicable ICH Good Clinical Practice (GCP) Guidelines</li><li>Applicable laws and regulations</li><li>The protocol, protocol amendments, ICF, Investigator Brochure, and other relevant documents (eg, advertisements) must be submitted to an IRB/IEC by the investigator and reviewed and approved by the IRB/IEC before the study is initiated.</li><li>Any amendments to the protocol will require IRB/IEC approval before implementation of changes made to the study design, except for changes necessary to eliminate an immediate hazard to study participants.&nbsp;</li><li>The investigator will be responsible for the following:</li><li>&nbsp;Providing written summaries of the status of the study to the IRB/IEC annually or more frequently in accordance with the requirements, policies, and procedures established by the IRB/IEC</li><li>Notifying the IRB/IEC of SAEs or other significant safety findings as required by IRB/IEC procedures</li><li>Providing oversight of the conduct of the study at the site and adherence to requirements of 21 CFR, ICH guidelines, the IRB/IEC, European regulation 536/2014 for clinical studies (if applicable), and all other applicable local regulations</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.2',
            text: 'Financial Disclosure',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'financial_disclosure_fullText',
            value:
              '<p>Investigators and sub-investigators will provide the sponsor with sufficient, accurate financial information as requested to allow the sponsor to submit complete and accurate financial certification or disclosure statements to the appropriate regulatory authorities. Investigators are responsible for providing information on financial interests during the course of the study and for 1 year after completion of the study.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.3',
            text: 'Informed Consent Process',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'informed_consent_fullText',
            value:
              "<ul><li>The investigator or his/her representative will explain the nature of the study to the participant or his/her legally authorized representative and answer all questions regarding the study.&nbsp;</li><li>Participants must be informed that their participation is voluntary. Participants or their legally authorized representative will be required to sign a statement of informed consent that meets the requirements of 21 CFR 50, local regulations, ICH guidelines, Health Insurance Portability and Accountability Act (HIPAA) requirements, where applicable, and the IRB/IEC or study center.</li><li>The medical record must include a statement that written informed consent was obtained before the participant was enrolled in the study and the date the written consent was obtained. The authorized person obtaining the informed consent must also sign the ICF.</li><li>Participants must be re-consented to the most current version of the ICF(s) during their participation in the study.</li><li>&nbsp;A copy of the ICF(s) must be provided to the participant or the participant’s legally authorized representative.</li></ul><p>The ICF will contain a separate section that addresses the use of remaining mandatory samples for optional exploratory research. The investigator or authorized designee will explain to each participant the objectives of the exploratory research. Participants will be told that they are free to refuse to participate and may withdraw their consent at any time and for any reason during the storage period. A separate signature will be required to document a participant's agreement to allow any remaining specimens to be used for exploratory research. Participants who decline to participate in this optional research will not provide this separate signature.</p>",
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.4',
            text: 'Data Protection',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'data_protection_fullText',
            value:
              '<ul><li>Participants will be assigned a unique identifier by the sponsor. Any participant records or datasets that are transferred to the sponsor will contain the identifier only; participant names or any information which would make the participant identifiable will not be transferred.</li><li>The participant must be informed that his/her personal study-related data will be used by the sponsor in accordance with local data protection law. The level of disclosure must also be explained to the participant.</li><li>The participant must be informed that his/her medical records may be examined by Clinical Quality Assurance auditors or other authorized personnel appointed by the sponsor, by appropriate IRB/IEC members, and by inspectors from regulatory authorities.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.5',
            text: 'Committees Structure',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'committees_structure_fullText',
            value:
              '<p>See the Data Monitoring Committee Charter for details.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.6',
            text: 'Dissemination of Clinical Study Data',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'dissemination_study_data_fullText',
            value: '<p>See the Data Management Plan for details.</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.7',
            text: 'Data Quality Assurance',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'data_qual_fullText',
            value:
              '<ul><li>All participant data relating to the study will be recorded on printed or electronic CRF unless transmitted to the sponsor or designee electronically (eg, laboratory data). The investigator is responsible for verifying that data entries are accurate and correct by physically or electronically signing the CRF.</li><li>The investigator must maintain accurate documentation (source data) that supports the information entered in the CRF.</li><li>The investigator must permit study-related monitoring, audits, IRB/IEC review, and regulatory agency inspections and provide direct access to source data documents.</li><li>The sponsor or designee is responsible for the data management of this study including quality checking of the data.</li><li>Study monitors will perform ongoing source data verification to confirm that data entered into the CRF by authorized site personnel are accurate, complete, and verifiable from source documents; that the safety and rights of participants are being protected; and that the study is being conducted in accordance with the currently approved protocol and any other study agreements, ICH GCP, and all applicable regulatory requirements.</li><li>Records and documents, including signed ICFs, pertaining to the conduct of this study must be retained by the investigator for 105years after study completion unless local regulations or institutional policies require a longer retention period. No records may be destroyed during the retention period without the written approval of the sponsor. No records may be transferred to another location or party without written notification to the sponsor.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.8',
            text: 'Source Documents',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'source_doc_fullText',
            value:
              '<ul><li>Source documents provide evidence for the existence of the participant and substantiate the integrity of the data collected. Source documents are filed at the investigator’s site.</li><li>Data reported on the CRF or entered in the eCRF that are transcribed from source documents must be consistent with the source documents or the discrepancies must be explained. The investigator may need to request previous medical records or transfer records, depending on the study. Also, current medical records must be available.</li><li>Definition of what constitutes source data can be found in the Data Management Plan.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.9',
            text: 'Study and Site Closure',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'study_site_closure_fullText',
            value:
              "<p>The sponsor designee reserves the right to close the study site or terminate the study at any time for any reason at the sole discretion of the sponsor. Study sites will be closed upon study completion. A study site is considered closed when all required documents and study supplies have been collected and a study-site closure visit has been performed.</p><p>The investigator may initiate study-site closure at any time, provided there is reasonable cause and sufficient notice is given in advance of the intended termination.</p><p>Reasons for the early closure of a study site by the sponsor or investigator may include but are not limited to:</p><ul><li>Failure of the investigator to comply with the protocol, the requirements of the IRB/IEC or local health authorities, the sponsor's procedures, or GCP guidelines</li><li>&nbsp;Inadequate recruitment of participants by the investigator</li><li>Discontinuation of further study intervention development</li></ul>",
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.10',
            text: 'Publication Policy',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'publication_policy_fullText',
            value:
              '<ul><li>The results of this study may be published or presented at scientific meetings. If this is foreseen, the investigator agrees to submit all manuscripts or abstracts to the sponsor before submission. This allows the sponsor to protect proprietary information and to provide comments.</li><li>The sponsor will comply with the requirements for publication of study results. In accordance with standard editorial and ethical practice, the sponsor will generally support publication of multicenter studies only in their entirety and not as individual site data. In this case, a coordinating investigator will be designated by mutual agreement.</li><li>Authorship will be determined by mutual agreement and in line with International Committee of Medical Journal Editors authorship requirements.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.2',
            text: 'Appendix 2: Clinical Laboratory Tests',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'clinical_lab_test_fullText',
            value:
              '<ul><li>The tests detailed in Table 10.2.1 will be performed by the central laboratory.</li><li>Local laboratory results are only required in the event that the central laboratory results are not available in time for either study intervention administration and/or response evaluation. If a local sample is required, it is important that the sample for central analysis is obtained at the same time. Additionally, if the local laboratory results are used to make either a study intervention decision or response evaluation, the results must be entered into the CRF.</li><li>Protocol-specific requirements for inclusion or exclusion of participants are detailed in Section 5 of the protocol.</li><li>Additional tests may be performed at any time during the study as determined necessary by the investigator or required by local regulations.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.3',
            text:
              'Appendix 3: Adverse Events: Definitions and Procedures for Recording, Evaluating, Follow-up, and Reporting',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'adverse_events_fullText',
            value:
              '<p>Definition of AE</p><p>AE Definition</p><ul><li>An AE is any untoward medical occurrence in a patient or clinical study participant, temporally associated with the use of study intervention, whether or not considered related to the study intervention.</li><li>NOTE: An AE can therefore be any unfavorable and unintended sign (including an abnormal laboratory finding), symptom, or disease (new or exacerbated) temporally associated with the use of study intervention.</li></ul><p>Events Meeting the AE Definition</p><ul><li>Any abnormal laboratory test results (hematology, clinical chemistry, or urinalysis) or other safety assessments (eg, ECG, radiological scans, vital signs measurements), including those that worsen from baseline, considered clinically significant in the medical and scientific judgment of the investigator (ie, not related to progression of underlying disease).</li><li>Exacerbation of a chronic or intermittent pre-existing condition including either an increase in frequency and/or intensity of the condition.</li><li>New conditions detected or diagnosed after study intervention administration even though it may have been present before the start of the study.</li><li>Signs, symptoms, or the clinical sequelae of a suspected drug-drug interaction.</li><li>&nbsp;Signs, symptoms, or the clinical sequelae of a suspected overdose of either study intervention or a concomitant medication. Overdose per se will not be reported as an AE/SAE unless it is an intentional overdose taken with possible suicidal/self-harming intent. Such overdoses should be reported regardless of sequelae.</li><li>"Lack of efficacy" or "failure of expected pharmacological action" per se will not be reported as an AE or SAE. Such instances will be captured in the efficacy assessments. However, the signs, symptoms, and/or clinical sequelae resulting from lack of efficacy will be reported as AE or SAE if they fulfil the definition of an AE or SAE.</li><li>The signs, symptoms, and/or clinical sequelae resulting from lack of efficacy will be reported as AE or SAE if they fulfil the definition of an AE or SAE. Also, "lack of efficacy" or "failure of expected pharmacological action" also constitutes an AE or SAE.</li></ul><p>Events NOT Meeting the AE Definition</p><ul><li>Any clinically significant abnormal laboratory findings or other abnormal safety assessments which are associated with the underlying disease, unless judged by the investigator to be more severe than expected for the participant’s condition.</li><li>The disease/disorder being studied or expected progression, signs, or symptoms of the disease/disorder being studied, unless more severe than expected for the participant’s condition.</li><li>Medical or surgical procedure (eg, endoscopy, appendectomy): the condition that leads to the procedure is the AE.</li><li>Situations in which an untoward medical occurrence did not occur (social and/or convenience admission to a hospital).</li><li>Anticipated day-to-day fluctuations of pre-existing disease(s) or condition(s) present or detected at the start of the study that do not worsen.</li></ul><p>Definition of SAE</p><p>If an event is not an AE per definition above, then it cannot be an SAE even if serious conditions are met (eg, hospitalization for signs/symptoms of the disease under study, death due to progression of disease).</p><p>a.SAE is defined as any untoward medical occurrence that, at any dose:</p><p>c. Results in death</p><p>d. Is life-threatening</p><p>The term "life-threatening" in the definition of "serious" refers to an event in which the participant was at risk of death at the time of the event. It does not refer to an event, which hypothetically might have caused death, if it were more severe.</p><p>e. Requires inpatient hospitalization or prolongation of existing hospitalization</p><p>In general, hospitalization signifies that the participant has been detained (usually involving at least an overnight stay) at the hospital or emergency ward for observation and/or treatment that would not have been appropriate in the physician’s office or outpatient setting. Complications that occur during hospitalization are AEs. If a complication prolongs hospitalization or fulfills any other serious criteria, the event is serious. When in doubt as to whether “hospitalization” occurred or was necessary, the AE should be considered serious.</p><p>Hospitalization for elective treatment of a pre-existing condition that did not worsen from baseline is not considered an AE.</p><p>f. Results in persistent disability/incapacity</p><ul><li>The term disability means a substantial disruption of a person’s ability to conduct normal life functions.</li><li>This definition is not intended to include experiences of relatively minor medical significance such as uncomplicated headache, nausea, vomiting, diarrhea, influenza, and accidental trauma (eg, sprained ankle) which may interfere with or prevent everyday life functions but do not constitute a substantial disruption.</li></ul><p>g. Is a congenital anomaly/birth defect</p><p>h. Other situations:</p><ul><li>Medical or scientific judgment should be exercised in deciding whether SAE reporting is appropriate in other situations such as important medical events that may not be immediately life-threatening or result in death or hospitalization but may jeopardize the participant or may require medical or surgical intervention to prevent one of the other outcomes listed in the above definition. These events should usually be considered serious.</li></ul><p>Examples of such events include invasive or malignant cancers, intensive treatment in an emergency room or at home for allergic bronchospasm, blood dyscrasias or convulsions that do not result in hospitalization, or development of drug dependency or drug abuse.</p><p>Recording and Follow-Up of AE and/or SAE</p><p>AE and SAE Recording</p><ul><li>When an AE/SAE occurs, it is the responsibility of the investigator to review all documentation (eg, hospital progress notes, laboratory reports, and diagnostics reports) related to the event.</li><li>The investigator will then record all relevant AE/SAE information in the CRF.</li><li>It is not acceptable for the investigator to send photocopies of the participant’s medical records to CogGen in lieu of completion of the AE/SAE CRF page.</li><li>There may be instances when copies of medical records for certain cases are requested by CogGen. In this case, all participant identifiers, with the exception of the participant number, will be redacted on the copies of the medical records before submission to CogGen.</li><li>The investigator will attempt to establish a diagnosis of the event based on signs, symptoms, and/or other clinical information. Whenever possible, the diagnosis (not the individual signs/symptoms) will be documented as the AE/SAE.</li></ul><p>Assessment of Intensity</p><p>The investigator will make an assessment of intensity for each AE and SAE reported during the study and assign it to 1 of the following categories:&nbsp;</p><ul><li>Mild: An event that is easily tolerated by the participant, causing minimal discomfort and not interfering with everyday activities.</li><li>Moderate: An event that causes sufficient discomfort and interferes with normal everyday activities.</li><li>Severe: An event that prevents normal everyday activities. An AE that is assessed as severe should not be confused with a SAE. Severe is a category utilized for rating the intensity of an event; and both AEs and SAEs can be assessed as severe.</li></ul><p>An event is defined as ‘serious’ when it meets at least 1 of the predefined outcomes as described in the definition of an SAE, NOT when it is rated as severe.&nbsp;</p><p>Assessment of Causality</p><p>The investigator is obligated to assess the relationship between study intervention and each occurrence of each AE/SAE.</p><ul><li>A "reasonable possibility" of a relationship conveys that there are facts, evidence, and/or arguments to suggest a causal relationship, rather than a relationship cannot be ruled out.</li><li>The investigator will use clinical judgment to determine the relationship.</li><li>&nbsp;Alternative causes, such as underlying disease(s), concomitant therapy, and other risk factors, as well as the temporal relationship of the event to study intervention administration will be considered and investigated.</li><li>The investigator will also consult the Investigator’s Brochure (IB) and/or Product Information, for marketed products, in his/her assessment.</li><li>For each AE/SAE, the investigator must document in the medical notes that he/she has reviewed the AE/SAE and has provided an assessment of causality.</li><li>There may be situations in which an SAE has occurred and the investigator has minimal information to include in the initial report to CogGen. However, it is very important that the investigator always make an assessment of causality for every event before the initial transmission of the SAE data to CogGen.</li><li>The investigator may change his/her opinion of causality in light of follow-up information and send a SAE follow-up report with the updated causality assessment.</li><li>The causality assessment is one of the criteria used when determining regulatory reporting requirements.</li></ul><p>Follow-up of AEs and SAEs</p><ul><li>The investigator is obligated to perform or arrange for the conduct of supplemental measurements and/or evaluations as medically indicated or as requested by CogGen to elucidate the nature and/or causality of the AE or SAE as fully as possible. This may include additional laboratory tests or investigations, histopathological examinations, or consultation with other health care professionals.</li><li>&nbsp;New or updated information will be recorded in the originally completed CRF.</li><li>The investigator will submit any updated SAE data to the sponsor within 24 hours of receipt of the information.</li></ul><p>Reporting of SAEs</p><p>SAE Reporting to CogGen via an Electronic Data Collection Tool</p><ul><li>The primary mechanism for reporting an SAE to CogGen will be the electronic data collection tool.</li><li>If the electronic system is unavailable for more than 24 hours, then the site will use the paper SAE data collection tool (see next section).</li><li>The site will enter the SAE data into the electronic system as soon as it becomes available.</li><li>After the study is completed at a given site, the electronic data collection tool will be taken off-line to prevent the entry of new data or changes to existing data.</li><li>If a site receives a report of a new SAE from a study participant or receives updated data on a previously reported SAE after the electronic data collection tool has been taken off-line, then the site can report this information on a paper SAE form (see next section) or to the SAE coordinator by telephone.</li><li>Contacts for SAE reporting can be found in the Study Manual.</li></ul><p>SAE Reporting to CogGen via Paper CRF</p><ul><li>Facsimile transmission of the SAE paper CRF is the preferred method to transmit this information to the SAE coordinator.</li><li>In rare circumstances and in the absence of facsimile equipment, notification by telephone is acceptable with a copy of the SAE data collection tool sent by overnight mail or courier service.</li><li>Initial notification via telephone does not replace the need for the investigator to complete and sign the SAE CRF pages within the designated reporting time frames.</li><li>Contacts for SAE reporting can be found in the Study Manual.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.4',
            text:
              'Appendix 4: Contraceptive Guidance and Collection of Pregnancy Information',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'preg_info_fullText',
            value:
              "<p>Definitions:</p><p>Woman of Childbearing Potential (WOCBP)</p><p>A woman is considered fertile following menarche and until becoming post-menopausal unless permanently sterile (see below).</p><p>Women in the following categories are not considered WOCBP</p><ol><li>Premenarchal</li><li>Premenopausal female with 1 of the following:</li><ol><li>Documented hysterectomy</li><li>Documented bilateral salpingectomy</li><li>Documented bilateral oophorectomy                                                                                                                           Note:  Documentation can come from the site personnel’s: review of the participant’s medical records, medical examination, or medical history interview</li></ol><li>Postmenopausal female</li><ol><li>&nbsp;A postmenopausal state is defined as no menses for 12 months without an alternative medical cause. A high follicle stimulating hormone (FSH) level in the postmenopausal range may be used to confirm a postmenopausal state in women not using hormonal contraception or hormonal replacement therapy (HRT). However, in the absence of 12 months of amenorrhea, a single FSH measurement is insufficient.&nbsp;</li><li>Females on HRT and whose menopausal status is in doubt will be required to use one of the non-estrogen hormonal highly effective contraception methods if they wish to continue their HRT during the study. Otherwise, they must discontinue HRT to allow confirmation of postmenopausal status before study enrollment.</li></ol></ol><p><strong><ins>Contraception Guidance:</ins></strong></p><p><strong>Male participants</strong></p><p>For genotoxic study intervention or for non-genotoxic study intervention with demonstrated or suspected human teratogenicity/fetotoxicity at subtherapeutic exposure levels if relevant systemic concentrations may be achieved in WOCBP from exposure to seminal fluid to prevent exposure of an embryo/fetus, the following text is required.  This text is required ONLY until it has been determined that WOCBP who are partners of male participants no longer need protection from seminal study intervention exposure.&nbsp;</p><p>Male participants with female partners of childbearing potential are eligible to participate if they agree to ONE of the following [during the protocol-defined time frame in Section 5.1]:&nbsp;</p><ul><li>Are abstinent from penile-vaginal intercourse as their usual and preferred lifestyle (abstinent on a long term and persistent basis) and agree to remain abstinent</li></ul><p>Agree to use a male condom plus partner use of a contraceptive method with a failure rate of &lt;1% per year as described in Table [X] when having penile-vaginal intercourse with a woman of childbearing potential who is not currently pregnant</p><p>In addition male participants must refrain from donating sperm for the duration of the study and for [X months] after [study completion or the last dose of study intervention].</p><p>Male participants with a pregnant or breastfeeding partner must agree to remain abstinent from penile vaginal intercourse or use a male condom during each episode of penile penetration [during the protocol-defined time frame].</p><p><strong>Female participants</strong></p><p>Female participants of childbearing potential are eligible to participate if they agree to use a highly effective method of contraception consistently and correctly as described in Table [X].</p><p>Female participants of childbearing potential are eligible to participate if they agree to use a highly effective method of contraception consistently and correctly as described in Table 10.4.1.</p><p>Table 10.4.1: Highly Effective Contraceptive Methods</p><p>Table [X]: Highly Effective Contraceptive Methods</p><p>Highly Effective Contraceptive Methods That Are User Dependent a&nbsp;</p><p>Failure rate of &lt;1% per year when used consistently and correctly.&nbsp;</p><ul><li>Combined (estrogen and progestogen containing) hormonal contraception associated with inhibition of ovulationb</li><li>Oral</li><li>Intravaginal&nbsp;</li><li>Transdermal</li><li>Progestogen only hormonal contraception associated with inhibition of ovulation</li><li>Oral</li><li>Injectable&nbsp;</li></ul><p>Highly Effective Methods That Are User Independent a&nbsp;</p><p>Implantable progestogen only hormonal contraception associated with inhibition of ovulationb</p><ul><li>Intrauterine device (IUD)</li><li>Intrauterine hormone-releasing system (IUS)</li><li>Bilateral tubal occlusion</li><li>Vasectomized partner&nbsp;</li></ul><p>A vasectomized partner is a highly effective contraception method provided that the partner is the sole male sexual partner of the WOCBP and the absence of sperm has been confirmed. If not, an additional highly effective method of contraception should be used.&nbsp;</p><ul><li>Sexual abstinence&nbsp;</li></ul><p>Sexual abstinence is considered a highly effective method only if defined as refraining from heterosexual intercourse during the entire period of risk associated with the study intervention. The reliability of sexual abstinence needs to be evaluated in relation to the duration of the study and the preferred and usual lifestyle of the participant.&nbsp;</p><p>NOTES:&nbsp;</p><p>a) Typical use failure rates may differ from those when used consistently and correctly. Use should be consistent with local regulations regarding the use of contraceptive methods for participants participating in clinical studies.&nbsp;</p><p>b) Hormonal contraception may be susceptible to interaction with the study intervention, which may reduce the efficacy of the contraceptive method. In this case, two highly effective methods of contraception should be utilized during the treatment period and for at least 90 days after the last dose of study intervention&nbsp;</p><p>Pregnancy Testing:</p><ul><li>Choose from the options for language to be included in the protocol and delete any wording not required&nbsp;</li><li>Decide if local or central testing will be standard for the protocol. Highly sensitive serum testing is mandatory if required by local regulations or ethics committees, or to resolve an indeterminate test or to confirm a positive urine test.</li><li>As a minimum, a pregnancy test should be performed at the end of relevant systemic exposure. For studies with interventions with unlikely toxicity, additional pregnancy testing during the clinical study is not necessary.</li><li>For studies with interventions or procedures with possible embryo-fetal effects, more frequent pregnancy testing should be considered, taking into account, amongst other factors, the duration of the study.</li><li>WOCBP should only be included after a confirmed menstrual period and a negative highly sensitive urine pregnancy test.</li><li>Additional pregnancy testing should be performed at monthly intervals during the treatment period and after the last dose of study intervention and as required locally.</li><li>Pregnancy testing will be performed whenever a menstrual cycle is missed or when pregnancy is otherwise suspected</li></ul><p>Male participants with partners who become pregnant&nbsp;</p><ul><li>The investigator will attempt to collect pregnancy information on any male participant’s female partner who becomes pregnant while the male participant is in this study. This applies only to male participants who receive EEDEV-3456.</li><li>After obtaining the necessary signed informed consent from the pregnant female partner directly, the investigator will record pregnancy information on the appropriate form and submit it to the sponsor within 24 hours of learning of the partner’s pregnancy. The female partner will also be followed to determine the outcome of the pregnancy. Information on the status of the mother and child will be forwarded to the sponsor. Generally, the follow-up will be no longer than 6 to 8 weeks following the estimated delivery date. Any termination of the pregnancy will be reported regardless of fetal status (presence or absence of anomalies) or indication for the procedure.&nbsp;</li></ul><p>Female Participants who become pregnant&nbsp;</p><ul><li>The investigator will collect pregnancy information on any female participant who becomes pregnant while participating in this study. Information will be recorded on the appropriate form and submitted to the sponsor within 24 hours of learning of a participant's pregnancy. The participant will be followed to determine the outcome of the pregnancy. The investigator will collect follow-up information on the participant and the neonate and the information will be forwarded to the sponsor. Generally, follow-up will not be required for longer than 6 to 8 weeks beyond the estimated delivery date. Any termination of pregnancy will be reported, regardless of fetal status (presence or absence of anomalies) or indication for the procedure.</li><li>While pregnancy itself is not considered to be an AE or SAE, any pregnancy complication or elective termination of a pregnancy will be reported as an AE or SAE. A spontaneous abortion is always considered to be an SAE and will be reported as such. Any post-study pregnancy related SAE considered reasonably related to the study intervention by the investigator will be reported to the sponsor as described in Section 8.3.4. While the investigator is not obligated to actively seek this information in former study participants, he or she may learn of an SAE through spontaneous reporting.</li><li>Any female participant who becomes pregnant while participating in the study may request continuation of study intervention.</li></ul>",
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.5',
            text: 'Appendix 5: Genetics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'genetics_fullText',
            value:
              '<p><strong>Use/Analysis of DNA</strong></p><ul><li>Genetic variation may impact a participant’s response to study intervention, susceptibility to, and severity and progression of disease. Variable response to study intervention may be due to genetic determinants that impact drug absorption, distribution, metabolism, and excretion; mechanism of action of the drug; disease etiology; and/or molecular subtype of the disease being treated. Therefore, where local regulations and IRB/IEC allow, a blood sample will be collected for DNA analysis from consenting participants.</li><li>DNA samples will be used for research related to EEDEV-3456 or NSCLC and related diseases. They may also be used to develop tests/assays including diagnostic tests related to Epidermal Growth Factor Receptors. Genetic research may consist of the analysis of one or more candidate genes or the analysis of genetic markers throughout the genome (as appropriate).</li><li>The samples may be analyzed as part of a multi-study assessment of genetic factors involved in the response to EEDEV-3456 or study interventions of this class to understand study disease or related conditions.</li><li>The results of genetic analyses may be reported in the clinical study report (CSR) or in a separate study summary.</li><li>The sponsor will store the DNA samples in a secure storage space with adequate measures to protect confidentiality.</li><li>The samples will be retained while research on EEDEV-3456 continues but no longer than 3 years or other period as per local requirements.</li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.5',
            text: 'Appendix 6: Abbreviations',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'abbr_fullText',
            value:
              '<p>The following abbreviations and special terms have been used in this protocol:</p><p><strong><ins>Abbreviation or Special Term Definition</ins></strong></p><p>AE Adverse Event</p><p>ALT Alanine Transaminase</p><p>BICR Blinded Independent Central Review</p><p>BoR Best Objective Response</p><p>BP Blood Pressure</p><p>CR Complete Response</p><p>CRF Case Report Form</p><p>CT Computed Topography</p><p>CTCAE Common Terminology Criteria for Adverse Event</p><p>DCR Disease Control Rate</p><p>DMC Data Monitoring Committee</p><p>DoR Duration of Response</p><p>ECG Electrocardiogram</p><p>EGFR Epidermal Growth Factor Receptor</p><p>FDA Food and Drug Administration</p><p>GCP Good Clinical Practice</p><p>HR Hazard Ratio</p><p>HRT Hormone Replacement Therapy</p><p>ICF Informed Consent Form</p><p>ICH International Conference on Harmonisation</p><p>IEC Independent Ethics Committee</p><p>INR International Normalized Ratio</p><p>IRB Internal Review Board</p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.7',
            text: 'Appendix 7: Protocol Amendment History',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'amendment_hist_fullText',
            value:
              '<p>The Protocol Amendment Summary of Changes Table for the current amendment is located directly before the Table of Contents (TOC).</p><p>No amendments to date.</p>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '10',
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
        number: '10',
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
