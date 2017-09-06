'use strict';

module.exports = (sequelize, DataTypes) => {
  const Protocol = sequelize.define(
    'Protocol',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      targetEndDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      studyNickName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      TemplateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sponsorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      therapeuticArea: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      drugProjectId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compoundNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amendmentNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shortTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      legalRegisteredAddress1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      legalRegisteredAddress2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      legalRegisteredAddress3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      legalRegisteredAddress4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      regulatoryAgencyNumbers: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      developmenetPhase: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      indication: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      trialTypeId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      SourceProtocolId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      MedicId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      StatisticianId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      startedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      endedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      classMethods: {
        associate: models => {
          models.Protocol.belongsTo(models.State, { as: 'state' });
          models.Protocol.belongsTo(models.Template);
          models.Protocol.hasMany(models.ProtocolSection);
          models.Protocol.hasMany(models.SectionReviewer);
          models.Protocol.hasMany(models.SectionAuthor);
        },

        createFromTemplate: attributes => {
          const models = require('.');
          const ProtocolSection = models.ProtocolSection;
          let createdProtocol;

          return sequelize
            .transaction(t => {
              return Protocol.create(attributes).then(protocol => {
                createdProtocol = protocol;
                return protocol.getTemplate().then(template => {
                  if (template) {
                    let protocolSections = [];
                    return template.getTemplateSections().then(sections => {
                      for (const section of sections) {
                        let protocolSection = {
                          ProtocolId: protocol.id,
                          TemplateSectionId: section.id,
                          number: section.number,
                          order: section.order,
                          StateId: 1,
                          title: section.title,
                          content: section.structure,
                          createdBy: protocol.createdBy,
                          createdAt: new Date(),
                        };
                        protocolSections.push(protocolSection);
                      }
                      return ProtocolSection.bulkCreate(protocolSections);
                    });
                  }
                });
              });
            })
            .then(result => {
              // transaction completed
              return createdProtocol;
            });
        },

        createFromProtocol: (attributes, sourceProtocol) => {
          const models = require('.');
          const ProtocolSection = models.ProtocolSection;
          let createdProtocol;

          attributes.TemplateId = sourceProtocol.TemplateId;

          return sequelize
            .transaction(t => {
              return Protocol.create(attributes).then(protocol => {
                createdProtocol = protocol;
                return sourceProtocol.getProtocolSections().then(sections => {
                  let protocolSections = [];
                  for (const section of sections) {
                    let protocolSection = {
                      ProtocolId: protocol.id,
                      TemplateSectionId: section.TemplateSectionId,
                      number: section.number,
                      order: section.order,
                      StateId: 1,
                      title: section.title,
                      content: section.content,
                      createdBy: protocol.createdBy,
                      createdAt: new Date(),
                    };
                    protocolSections.push(protocolSection);
                  }
                  return ProtocolSection.bulkCreate(protocolSections);
                });
              });
            })
            .then(result => {
              // transaction completed
              return createdProtocol;
            });
        },

        forUser: (userID, active = true) => {
          let activeClause = active ? '!= 3' : '= 3';

          return sequelize.query(
            `
SELECT
  "Protocols".*,
  (
    select count(*)
    from "ProtocolSections"
    where "ProtocolSections"."ProtocolId" = "Protocols".id
  ) as sections,
  (
    select count(*)
    from "ProtocolSections"
    inner join "SectionAuthors"
      on "SectionAuthors"."ProtocolSectionId" = "ProtocolSections".id
      and "SectionAuthors"."UserId" = :userID
    where "ProtocolSections"."ProtocolId" = "Protocols".id
  ) as "authorSections",
  (
    select count(*)
    from "ProtocolSections"
    inner join "SectionReviewers"
      on "SectionReviewers"."ProtocolSectionId" = "ProtocolSections".id
      and "SectionReviewers"."UserId" = :userID
    where "ProtocolSections"."ProtocolId" = "Protocols".id
  ) as "reviewerSections",
  coalesce((
    select sum(CASE WHEN "ProtocolSections"."StateId" = 1 THEN 1 ELSE 0 END)
    from "ProtocolSections"
    where "ProtocolSections"."ProtocolId" = "Protocols".id
  ), 0) as "unstartedSections",
  coalesce((
    select sum(CASE WHEN "ProtocolSections"."StateId" = 2 THEN 1 ELSE 0 END)
    from "ProtocolSections"
    where "ProtocolSections"."ProtocolId" = "Protocols".id
  ), 0) as "startedSections",
  coalesce((
    select sum(CASE WHEN ("ProtocolSections"."StateId" = 3 OR "ProtocolSections"."StateId" = 5) THEN 1 ELSE 0 END)
    from "ProtocolSections"
    where "ProtocolSections"."ProtocolId" = "Protocols".id
  ), 0) as "completeSections",
  coalesce((
    select sum(CASE WHEN "ProtocolSections"."StateId" = 4 THEN 1 ELSE 0 END)
    from "ProtocolSections"
    where "ProtocolSections"."ProtocolId" = "Protocols".id
  ), 0) as "reviewingSections"
FROM "Protocols"
WHERE ("Protocols"."createdBy" = :userID
OR "Protocols".id IN (
  select distinct "SectionAuthors"."ProtocolId"
  from "SectionAuthors"
  where "SectionAuthors"."UserId" = :userID
  UNION
  select distinct "SectionReviewers"."ProtocolId"
  from "SectionReviewers"
  where "SectionReviewers"."UserId" = :userID
)) AND "Protocols"."stateId" ${activeClause}
ORDER BY "Protocols"."updatedAt" DESC
            `,
            {
              replacements: { userID: userID },
              model: Protocol,
            }
          );
        },
      },
    }
  );
  return Protocol;
};
