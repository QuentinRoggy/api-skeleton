const coreDatamapper = require("../models/coreDatamapper");
const pathChecker = require("../services/pathChecker");
const associationsConfig = require("../services/associationsConfig");

const coreController = {
  async getAll(req, res) {

    const tableName = pathChecker.checkUrl(req.url);
    
    let queryParams = {
      tableName
    };

    const relationFound = associationsConfig.associationChecker(tableName);

    queryParams.relation = relationFound;
    
    const results = await coreDatamapper.findAll(queryParams);


    res.json(results);
  }
};

module.exports = coreController;