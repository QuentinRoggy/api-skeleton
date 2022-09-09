const paramsConfigurator = {
  relation: {
    // put here your differents associations
    restaurant: [
      {
        fk: "manager_id",
        tableAssociation: "manager",
        column: "manager.id"
      },
      {
        fk: "city_id",
        tableAssociation: "city",
        column: "city.id"
      }
    ]
  },

  createParams(paramsUrl) {

    const urlSplitted = paramsUrl.url.split("/");
    const tableName = urlSplitted[1];
    let association = [];

    Object.entries(paramsConfigurator.relation).forEach(([param, value]) => {
      if (param === tableName) {
        for (const entries of value) {
          association.push(entries);
        }
        
      }
    });

    const params = {
      tableName: tableName,
      association
    }

   if (paramsUrl?.id) {
    params.id = paramsUrl.id;
   }

   if (paramsUrl?.content) {
    params.body = paramsUrl.content
   }

    return params;
  }
};

module.exports = paramsConfigurator;