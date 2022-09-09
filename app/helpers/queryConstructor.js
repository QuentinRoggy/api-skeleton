const debug = require("debug")("query");
const queryConstructor = {

  selectQuery(params){

    let queryString = `SELECT * FROM ${params.tableName} `;
    let joinString = '';
    let whereString = '';

    if (params.association.length > 0) {
      let fromAssociationString = [];

      queryString = `SELECT row_to_json(row) ${params.tableName} from ( SELECT ${params.tableName}.*, `

      for (const association of params.association){
        const associationAlias = association.tableAssociation.substr(0, 3);

        fromAssociationString.push(`${associationAlias} AS ${association.tableAssociation} `);

        joinString += `INNER JOIN (SELECT ${association.tableAssociation}.* from ${association.tableAssociation} ${association.tableAssociation}) ${associationAlias} ON ${associationAlias}.id = ${params.tableName}.${association.fk} `;
        
      }

      if(params?.id) {
        whereString += ` WHERE ${params.tableName}.id = $1`;
      }
    
      queryString += fromAssociationString.join(' , ') + `from ${params.tableName}  ` + joinString + ` ${whereString}) row;`

    } else {
      if (params?.id) {
      whereString += ` WHERE ${params.tableName}.id = $1`;
      queryString += whereString;
      }
    }
    
    return queryString;
  },

  createQuery(params) {

    let queryObject = {};

    let queryString = "";
    let counter = 1;
    let queryParams = [];
    let values = [];
    let columns = [];

    for (const key in params.body ) {
      columns.push(key);
      queryParams.push(`$${counter}`);
      counter ++;

      values.push(params.body[key]);
    }

    queryString = `INSERT INTO ${params.tableName} (`+columns.join(',')+') VALUES ('+queryParams.join(',')+') RETURNING id,'+columns.join(',')+';';

    queryObject.queryString = queryString;
    queryObject.values = values;
    
    return queryObject;

  },

  updateQuery(params) {

    let queryObject = {};

    let queryString = "";
    let counter = 1;
    let queryParams = [];
    let values = [];
    let columns = [];

    for (const key in params.body ) {
      columns.push(key);
      queryParams.push(`$${counter}`);
      counter ++;

      values.push(params.body[key]);
    }

    if (queryParams.length > 1 ) {
      queryString = `UPDATE ${params.tableName} SET ( ${columns.join(',')} ) = (${queryParams.join(',')}) WHERE id = ${params.id} RETURNING id;`;

    } else {
      queryString = `UPDATE ${params.tableName} SET ${columns.join(',')} = ${queryParams.join(',')} WHERE id = ${params.id} RETURNING id;`;
    }

    queryObject.queryString = queryString;
    queryObject.values = values;
    
    return queryObject;

  },

  deleteQuery(params) {
    let queryString = `DELETE FROM ${params.tableName} WHERE id = $1;`;

    return queryString;
  }

};

module.exports = queryConstructor;