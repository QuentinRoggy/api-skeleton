const paramsConfigurator = {
  relation: {
    // put here your differents associations
    posts: {
      fk: "categories_id",
      column: "categories.id",
      tableAssociation: "categories"
    }
  },

  createParams(paramsUrl) {

    const urlSplitted = paramsUrl.url.split("/");
    const tableName = urlSplitted[1];
    let association;

    Object.entries(paramsConfigurator.relation).forEach(([param, value]) => {
      if (param === tableName) {
        association =  value;
      }
    });

    const params = {
      tableName: tableName,
      association
    }

   if (paramsUrl?.id) {
    params.id = paramsUrl.id;
   }

    return params;
  }
};

module.exports = paramsConfigurator;