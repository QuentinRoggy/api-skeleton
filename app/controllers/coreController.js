const coreDatamapper = require("../models/coreDatamapper");
const paramsConfigurator = require("../helpers/paramsConfigurator");
const debug = require("debug")("controller");

const coreController = {
  async getAll(req, res) {
    const urlParams = {url: req.url};

    const queryParams = paramsConfigurator.createParams(urlParams);
    
    const results = await coreDatamapper.findAll(queryParams);

    res.json(results);
  },

  async getOneByPk(req, res) {
    const idToFind = parseInt(req.params.id);

    const urlParams = {
      url: req.url,
      id: idToFind
    };

    const queryParams = paramsConfigurator.createParams(urlParams);

    const result = await coreDatamapper.findByPk(queryParams);

    res.json(result);
  },

  async create(req, res) {

    const urlParams = {
      url: req.url,
      content: req.body
    };

    const queryParams = paramsConfigurator.createParams(urlParams);

    const result = await coreDatamapper.create(queryParams);

    res.json({message: `L'id ${result.id} a bien été ajouté à la table ${queryParams.tableName}`});
  },

  async update(req, res) {
    const idToFind = parseInt(req.params.id);

    const urlParams = {
      url: req.url,
      id: idToFind,
      content: req.body
    };

    const queryParams = paramsConfigurator.createParams(urlParams);

    const result = await coreDatamapper.update(queryParams);

    res.json({message: `L'id ${result.id} a bien été mis à jour dans la table ${queryParams.tableName}`});
  },

  async delete(req, res) {
    const idToDelete = parseInt(req.params.id);

    const urlParams = {
      url: req.url,
      id: idToDelete
    };

    const queryParams = paramsConfigurator.createParams(urlParams);

    await coreDatamapper.delete(queryParams);

    res.json({message: `l'Id ${idToDelete} de la table ${queryParams.tableName} a bien été supprimé.`});
  },
};

module.exports = coreController;