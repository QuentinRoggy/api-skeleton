const queryConstructor = {

  selectQuery(params){

    let queryString = `SELECT * FROM ${params.tableName} `;
    let joinString = '';
    let whereString = '';

    if (params?.association) {
      joinString = `INNER JOIN ${params.association.tableAssociation} ON ${params.association.column} = ${params.association.fk}`;
    }
    
    if(params?.id) {
      whereString += ` WHERE ${params.tableName}.id = ${params.id} ;`;
    }
    
    queryString += joinString + whereString;

    return queryString;

  }

};

module.exports = queryConstructor;