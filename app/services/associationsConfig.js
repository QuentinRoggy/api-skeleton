const associationsConfig = {
    relation: {
      posts: {
        column: "categories_id",
        fk: "categories.id",
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