const express = require('express');
const router = express.Router();
const models = require('../models');
const ProtocolSection = models.ProtocolSection;
const SectionReviewer = models.SectionReviewer;
const SectionAuthors = models.SectionAuthor;
const Protocol = models.Protocol;

function SendResponse(res, responseData) {
  res.statusCode = responseData.statusCode;
  return res.status(responseData.statusCode).send(responseData);
}

router.put('/:id', (req, res) => {
  ProtocolSection.find({
    where: {
      id: req.params.id,
    },
  }).then(protocolSection => {
    if (protocolSection) {
      protocolSection
        .updateAttributes({
          content: req.body.content,
          StateId: protocolSection.StateId ===1? 2: protocolSection.StateId,
          updatedBy: req.body.userId,
          updatedAt: new Date(),
        })
        .then(() => {
          protocolSection.getProtocol().then(protocol => {
            protocol
              .updateAttributes({
                stateId: 2,
                updatedBy: req.body.userId,
                updatedAt: new Date(),
              })
              .then(protocolSections => {
                if (
                  req.body.protocol_section_id != null ||
                  req.body.protocol_section_id != undefined
                ) {
                  SectionReviewer.destroy({
                    where: {
                      ProtocolSectionId: req.body.protocol_section_id,
                    },
                  });

                  SectionAuthors.destroy({
                    where: {
                      ProtocolSectionId: req.body.protocol_section_id,
                    },
                  });
                }

                if (
                  req.body.SectionReviewers != null &&
                  req.body.SectionReviewers != undefined &&
                  req.body.SectionReviewers.length > 0
                ) {
                  SectionReviewer.bulkCreate(req.body.SectionReviewers);
                }

                if (
                  req.body.SectionAuthors != null &&
                  req.body.SectionAuthors != undefined &&
                  req.body.SectionAuthors.length > 0
                ) {
                  SectionAuthors.bulkCreate(req.body.SectionAuthors);
                }
              })
              .then(() => {
                let details = {
                  statusCode: 200,
                  statusMessage: 'Protocol Section content updated.',
                  protocolSection: {
                    id: protocolSection.id,
                    content: protocolSection.content,
                  },
                };

                SendResponse(res, details);
              });
          });
        });
    } else {
      responseBody = {
        statusCode: 404,
        statusMessage: `Protocol Section with id ${req.params.id} not found`,
      };
      SendResponse(res, responseBody);
    }
  });
});

router.put('/changeState/:id', (req, res) => {
  ProtocolSection.find({
    where: {
      id: req.params.id,
    },
  }).then(protocolSection => {
    if (protocolSection) {
      protocolSection
        .updateAttributes({
          StateId: req.body.StateId,
          updatedBy: req.body.userId,
          updatedAt: new Date(),
        })
        .then(() => {
          protocolSection.getProtocol().then(protocol => {
            protocol
              .updateAttributes({
                stateId: 2,
                updatedBy: req.body.userId,
                updatedAt: new Date(),
              })
              .then(() => {
                let details = {
                  statusCode: 200,
                  statusMessage: 'Protocol Section State updated.',
                  protocolSection: protocolSection,
                };
                SendResponse(res, details);
              });
          });
        });
    } else {
      responseBody = {
        statusCode: 404,
        statusMessage: `Protocol Section with id ${req.params.id} not found`,
      };
      SendResponse(res, responseBody);
    }
  });
});

router.post('/searchSectionDetailsByCriteria', (req, res, next) => {
  let body = req.body;
  let errMsgs = [];
  let details = {
    statusCode: 500,
    statusMessage: 'internal server error',
  };
  ProtocolSection.find({
    where: {
      ProtocolId: body.ProtocolId,
      TemplateSectionId: body.TemplateSectionId,
    },
    include: [
      {
        model: models.Protocol,
      },
    ],
  }).then(protocolSection => {
    let responseBody = {};
    if (protocolSection) {
      responseBody = {
        statusCode: 200,
        statusMessage: `Found section data for the protocol Id`,
        protocolSection: protocolSection,
      };
    } else {
      responseBody = {
        statusCode: 404,
        statusMessage: `Section details not found`,
      };
    }
    SendResponse(res, responseBody);
  });
});

module.exports = router;
