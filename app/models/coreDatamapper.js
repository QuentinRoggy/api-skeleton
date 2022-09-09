const client = require("../config/db");
const queryConstructor = require("../helpers/queryConstructor");
const debug = require("debug")("datamapper");

module.exports = {

  async findAll(params) {
    const queryString = queryConstructor.selectQuery(params);
    const result = await client.query(queryString);

    return result.rows;
  },

  async findByPk(params) {
    const queryString = queryConstructor.selectQuery(params);
    const result = await client.query(queryString, [params.id]);

    return result.rows[0];
  },

  async create(params) {
    const queryObject = queryConstructor.createQuery(params);
    const result = await client.query(queryObject.queryString, [...queryObject.values]);

    return result.rows[0];
  },

  async update(params) {
    const queryObject = queryConstructor.updateQuery(params);
    const result = await client.query(queryObject.queryString, [...queryObject.values]);

    return result.rows[0];
  },

  async delete(params) {
    const queryString = queryConstructor.deleteQuery(params);
    await client.query(queryString, [params.id]);

    return;
  }
};
