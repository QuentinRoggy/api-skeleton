const client = require("../config/db");
const queryConstructor = require("../helpers/queryConstructor");

module.exports = {

  async findAll(params) {

    const queryString = queryConstructor.selectQuery(params);

    const result = await client.query(queryString);

    return result.rows;
  },

  async findByPk(params) {

    const queryString = queryConstructor.selectQuery(params);

    const result = await client.query(queryString, [params.id]);

    return result.rows;
  },

  async delete(params) {

    const queryString = queryConstructor.deleteQuery(params);

    await client.query(queryString, [params.id]);

    return;
  }
 

}