const queryConstructor = {

  selectQuery(params){

    let queryString = `SELECT * FROM ${params.tableName} `;
    let joinString = '';
    let whereString = '';

    if (params.association.length > 0) {
      let fromAssociationString = [];

      queryString = `SELECT row_to_json(row) ${params.tableName} from ( SELECT ${params.tableName}.*, `

      for (const association of params.association){
        fromAssociationString.push(`${association.tableAssociation.substr(0, 3)} AS ${association.tableAssociation} `);
        joinString += `INNER JOIN (SELECT ${association.tableAssociation.substr(0, 1)}.* from ${association.tableAssociation} ${association.tableAssociation.substr(0, 1)}) ${association.tableAssociation.substr(0, 3)} ON ${association.tableAssociation.substr(0, 3)}.id = ${params.tableName}.${association.fk} `;
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

  deleteQuery(params) {
    let queryString = `DELETE FROM ${params.tableName} WHERE id = $1;`;

    return queryString;
  }

};

module.exports = queryConstructor;