const express = require('express');
const router = express.Router();
const models = require('../models');
const Protocol = models.Protocol;
const ProtocolSection = models.ProtocolSection;
const SectionAuthor = models.SectionAuthor;

const TemplateId = 1;
const CompletedStateId = 3;

function SendResponse(res, responseData) {
  res.statusCode = responseData.statusCode;
  return res.status(responseData.statusCode).send(responseData);
}

router.get('/:id/:detailed', (req, res, next) => {
  if (req.params.detailed === 'True') {
    Protocol.find({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: models.ProtocolSection,
          include: [
            {
              model: models.SectionAuthor,
            },
            {
              model: models.SectionReviewer,
            },
          ],
        },
      ],
      order: [[models.ProtocolSection, 'order', 'ASC']],
    }).then(protocol => {
      let responseBody = {};
      if (protocol) {
        responseBody = {
          statusCode: 200,
          statusMessage: `Found protocol ${req.params.id}`,
          protocol: protocol,
        };
      } else {
        responseBody = {
          statusCode: 404,
          statusMessage: `Protocol ${req.params.id} not found`,
        };
      }
      SendResponse(res, responseBody);
    });
  } else {
    Protocol.find({
      where: {
        id: req.params.id,
      },
    }).then(protocol => {
      let responseBody = {};
      if (protocol) {
        responseBody = {
          statusCode: 200,
          statusMessage: `Found protocol ${req.params.id}`,
          protocol: protocol,
        };
      } else {
        responseBody = {
          statusCode: 404,
          statusMessage: `Protocol ${req.params.id} not found`,
        };
      }
      SendResponse(res, responseBody);
    });
  }
});

function isEmpty(value) {
  return (
    (typeof value == 'string' && !value.trim()) ||
    typeof value == 'undefined' ||
    value === null
  );
}

function addAuthorsToSections(protocolId, medicId, statisticianId) {
  ProtocolSection.findAll({
    where: {
      ProtocolId: protocolId,
    },
    include: [
      {
        model: models.TemplateSection,
      },
    ],
  }).then(protocolSections => {
    let sectionAuthors = [];
    for (
      var i = 0;
      protocolSections !== null && i < protocolSections.length;
      i++
    ) {
      var templateSection = protocolSections[i].TemplateSection;
      if (
        templateSection.sectionTypeId == 1 ||
        templateSection.sectionTypeId == 2
      ) {
        let sectionAuthor = {
          ProtocolId: protocolId,
          ProtocolSectionId: protocolSections[i].id,
          UserId: templateSection.sectionTypeId === 1
            ? medicId
            : statisticianId,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        sectionAuthors.push(sectionAuthor);
      }
    }
    if (sectionAuthors !== null && sectionAuthors.length > 0) {
      SectionAuthor.bulkCreate(sectionAuthors);
      return 1;
    } else return 0;
  });
}

router.post('/create', (req, res, next) => {
  let body = req.body;
  let validationcheck = true;
  let errMsgs = [];
  let saved = false;
  let exception = false;
  let details = {
    statusCode: 500,
    statusMessage: 'internal server error',
  };
  //  check whether mandatory fields are present in the api call
  if (isEmpty(body.shortTitle)) {
    errMsgs.push('Please provide protocol short title');
    validationcheck = false;
  }
  if (isEmpty(body.studyNickName)) {
    errMsgs.push('Please provide study nick name');
    validationcheck = false;
  }
  if (isEmpty(body.targetEndDate)) {
    errMsgs.push('Please provide target endDate');
    validationcheck = false;
  }
  if (isEmpty(body.number)) {
    errMsgs.push('Please provide protocol number');
    validationcheck = false;
  }
  if (!body.sponsorId || body.sponsorId == 0) {
    errMsgs.push('Please provide sponsorId');
    validationcheck = false;
  }
  if (isEmpty(body.therapeuticArea)) {
    errMsgs.push('Please provide therapeuticArea');
    validationcheck = false;
  }
  if (isEmpty(body.drugProjectId)) {
    errMsgs.push('Please provide drugProjectId');
    validationcheck = false;
  }
  if (isEmpty(body.compoundNumber)) {
    errMsgs.push('Please provide compoundNumber');
    validationcheck = false;
  }
  if (!body.createdBy || body.createdBy == 0) {
    errMsgs.push('Please provide createdBy');
    validationcheck = false;
  }
  if (!validationcheck) {
    details = {
      statusCode: 400,
      statusMessage: errMsgs,
    };
    SendResponse(res, details);
  } else {
    Protocol.find({
      where: {
        number: body.number,
      },
    }).then(protocol => {
      if (protocol) {
        let details = {
          statusCode: 409,
          statusMessage: 'ProtocolNumber already exists',
          protocol: {
            id: protocol.id,
          },
        };
        SendResponse(res, details);
      } else {
        let attributes = {
          shortTitle: body.shortTitle,
          number: body.number,
          sponsorId: body.sponsorId,
          therapeuticArea: body.therapeuticArea,
          stateId: 1,
          TemplateId: TemplateId,
          drugProjectId: body.drugProjectId,
          compoundNumber: body.compoundNumber,
          targetEndDate: body.targetEndDate,
          studyNickName: body.studyNickName,
          amendmentNumber: body.amendmentNumber == undefined
            ? ''
            : body.amendmentNumber,
          title: body.title == undefined ? '' : body.title,
          legalRegisteredAddress1: body.legalRegisteredAddress1 == undefined
            ? ''
            : body.legalRegisteredAddress1,
          legalRegisteredAddress2: body.legalRegisteredAddress2 == undefined
            ? ''
            : body.legalRegisteredAddress2,
          legalRegisteredAddress3: body.legalRegisteredAddress3 == undefined
            ? ''
            : body.legalRegisteredAddress3,
          legalRegisteredAddress4: body.legalRegisteredAddress4 == undefined
            ? ''
            : body.legalRegisteredAddress4,
          regulatoryAgencyNumbers: body.regulatoryAgencyNumbers == undefined
            ? ''
            : body.regulatoryAgencyNumbers,
          developmenetPhase: body.developmenetPhase == undefined
            ? ''
            : body.developmenetPhase,
          indication: body.indication == undefined ? '' : body.indication,
          trialTypeId: body.trialTypeId == undefined ? '' : body.trialTypeId,
          SourceProtocolId: body.SourceProtocolId == undefined
            ? 0
            : body.SourceProtocolId,
          MedicId: body.MedicId == undefined ? 0 : body.MedicId,
          StatisticianId: body.StatisticianId == undefined
            ? 0
            : body.StatisticianId,
          createdBy: body.createdBy,
          createdAt: new Date(),
          startedAt: new Date(),
        };

        if (body.SourceProtocolId) {
          Protocol.find({
            where: {
              id: body.SourceProtocolId,
            },
          }).then(sourceProtocol => {
            if (sourceProtocol) {
              Protocol.createFromProtocol(
                attributes,
                sourceProtocol
              ).then(protocol => {
                addAuthorsToSections(
                  protocol.id,
                  protocol.MedicId,
                  protocol.StatisticianId
                );

                let details = {
                  statusCode: 200,
                  statusMessage: 'Protocol successfully inserted',
                  protocol: {
                    id: protocol.id,
                  },
                };
                SendResponse(res, details);
              });
            } else {
              let details = {
                statusCode: 404,
                statusMessage: 'Source Protocol was not found',
              };
              SendResponse(res, details);
            }
          });
        } else {
          Protocol.createFromTemplate(attributes).then(protocol => {
            addAuthorsToSections(
              protocol.id,
              protocol.MedicId,
              protocol.StatisticianId
            );

            let details = {
              statusCode: 200,
              statusMessage: 'Protocol successfully inserted',
              protocol: {
                id: protocol.id,
              },
            };
            SendResponse(res, details);
          });
        }
      }
    });
  }
});

router.post('/searchProtocolsByCriteria', (req, res, next) => {
  let body = req.body;
  let validationcheck = true;
  let errMsgs = [];
  let details = {
    statusCode: 500,
    statusMessage: 'internal server error',
  };

  if (body.IsSearchByProtocol) {
    if (isEmpty(body.ProtocolNumberValue)) {
      // errMsgs.push('Please provide Protocol Number Value');
      // validationcheck = false;
      body.IsSearchByProtocol = false;
    }
  }
  if (body.chkStudyNickName) {
    if (isEmpty(body.studyNickName)) {
      // errMsgs.push('Please provide therapeuticArea');
      // validationcheck = false;
      body.chkStudyNickName = false;
    }
  }
  if (body.chkTherapticAreas) {
    if (isEmpty(body.therapeuticArea)) {
      // errMsgs.push('Please provide therapeuticArea');
      // validationcheck = false;
      body.chkTherapticAreas = false;
    }
  }
  if (body.chkIndication) {
    if (isEmpty(body.indication)) {
      // errMsgs.push('Please provide indication');
      // validationcheck = false;
      body.chkIndication = false;
    }
  }
  if (body.chkCompoundNumber) {
    if (isEmpty(body.compoundNumber)) {
      // errMsgs.push('Please provide compoundNumber');
      // validationcheck = false;
      body.chkCompoundNumber = false;
    }
  }
  if (body.chkPhasevalue) {
    if (isEmpty(body.developmenetPhase)) {
      // errMsgs.push('Please provide developmenetPhase');
      // validationcheck = false;
      body.chkPhasevalue = false;
    }
  }
  if (body.chkstudytype) {
    if (isEmpty(body.trialTypeId)) {
      // errMsgs.push('Please provide trialTypeId');
      // validationcheck = false;
      body.chkstudytype = false;
    }
  }

  Protocol.findAll({
    attributes: [
      ['id', 'protocolId'],
      'studyNickName',
      'developmenetPhase',
      'number',
      'compoundNumber',
      'indication',
      'startedAt',
      'endedAt',
    ],
    where: {
      studyNickName: {
        $like: body.chkStudyNickName == false ? '%' : `%${body.studyNickName}%`,
      },
      therapeuticArea: {
        $like: body.chkTherapticAreas == false
          ? '%'
          : `%${body.therapeuticArea}%`,
      },
      indication: {
        $like: body.chkIndication == false ? '%' : `%${body.indication}%`,
      },
      compoundNumber: {
        $like: body.chkCompoundNumber == false
          ? '%'
          : `%${body.compoundNumber}%`,
      },
      developmenetPhase: {
        $like: body.chkPhasevalue == false
          ? '%'
          : `%${body.developmenetPhase}%`,
      },
      trialTypeId: {
        $like: body.chkstudytype == false ? '%' : `%${body.trialTypeId}%`,
      },
      number: {
        $iLike: body.IsSearchByProtocol == false
          ? '%'
          : `%${body.ProtocolNumberValue}%`,
      },
      stateId: CompletedStateId,
    },
  }).then(protocol => {
    let responseBody = {};
    if (protocol.length > 0) {
      responseBody = {
        statusCode: 200,
        statusMessage: `Found existing protocols`,
        protocol: protocol,
      };
    } else {
      responseBody = {
        statusCode: 404,
        statusMessage: `Protocol not found`,
      };
    }
    SendResponse(res, responseBody);
  });
});

router.put('/changeState/:id', (req, res) => {
  Protocol.find({
    where: {
      id: req.params.id,
    },
  }).then(protocol => {
    if (protocol) {
      protocol
        .updateAttributes({
          stateId: req.body.stateId,
          updatedBy: req.body.userId,
          updatedAt: new Date(),
        })
        .then(() => {
          let details = {
            statusCode: 200,
            statusMessage: 'Protocol State updated.',
            protocol: protocol,
          };
          SendResponse(res, details);
        });
    } else {
      responseBody = {
        statusCode: 404,
        statusMessage: `Protocol with id ${req.params.id} not found`,
      };
      SendResponse(res, responseBody);
    }
  });
});

module.exports = router;
