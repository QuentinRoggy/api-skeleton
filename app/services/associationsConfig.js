const associationsConfig = {
    relation: {
      // put here your differents associations
      posts: {
        fk: "categories_id",
        column: "categories.id",
        tableAssociation: "categories"
      }
    },

  associationChecker(tableName) {
    let relation;
    Object.entries(associationsConfig.relation).forEach(([param, value]) => {
      if (param === tableName) {
        relation =  value;
      }

    });

    return relation
  },

};

module.exports = associationsConfig;