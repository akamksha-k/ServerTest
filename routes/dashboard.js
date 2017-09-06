const express = require('express');
const router = express.Router();
const models = require('../models');
const Protocol = models.Protocol;
const ProtocolSection = models.ProtocolSection;
const SectionReviewer = models.SectionReviewer;
var Sequelize = require('sequelize');

const TemplateId = 1;
const CompletedStateId = 3;

function SendResponse(res, responseData) {
  res.statusCode = responseData.statusCode;
  return res.status(responseData.statusCode).send(responseData);
}

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  let protocolCollections = {
    active: [],
    complete: [],
  };

  return Protocol.forUser(userId).then(activeProtocols => {
    protocolCollections.active = activeProtocols;
    return Protocol.forUser(userId, false).then(completeProtocols => {
      protocolCollections.complete = completeProtocols;

      let responseBody = {};
      if (activeProtocols.length === 0 && completeProtocols.length === 0) {
        responseBody = {
          statusCode: 404,
          statusMessage: `Protocols not found`,
        };
      } else {
        responseBody = {
          statusCode: 200,
          statusMessage: `Found existing protocols`,
          protocols: protocolCollections,
        };
      }
      SendResponse(res, responseBody);
    });
  });
});
module.exports = router;
