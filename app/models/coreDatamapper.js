const client = require("../config/db");

module.exports = {

  async findAll(params) {

    let queryString = `SELECT * FROM ${params.tableName} `;
    let joinString = "";

    if (params?.relation) {
      console.log("passs");

      joinString = `INNER JOIN ${params.relation.tableAssociation} ON ${params.relation.fk} = ${params.relation.column}`;

    }

    queryString += joinString + ";";

    const result = await client.query(queryString);

    return result.rows;
    
  }

}