const client = require("../config/db");

module.exports = {

  async findAll(params) {

    console.log(params);

    let queryString = `SELECT * FROM ${params.tableName} `;
    let joinString = "";

    if (params?.association) {
      joinString = `INNER JOIN ${params.association.tableAssociation} ON ${params.association.column} = ${params.association.fk}`;

    }

    queryString += joinString + ";";

    const result = await client.query(queryString);

    return result.rows;
  },

  async findByPk(params) {
    let queryString = `SELECT * FROM ${params.tableName} `;
    let joinString = "";

    if (params?.association) {
      joinString = `INNER JOIN ${params.association.tableAssociation} ON ${params.association.column} = ${params.association.fk}`;

    }
    
    queryString += joinString + ` WHERE ${params.tableName}.id = ${params.id} ;`;

    const result = await client.query(queryString);

    return result.rows;
  }

}