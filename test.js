const associationsConfig = {
  relation: {
    posts: {
      colum: "categories_id",
      fk: "categories(id)",
      tableAssociation: "categories"
    }
  }
}

Object.entries(truc.relation).forEach(([param, value]) => {
  let count = 1;
  // console.log(count, param, value);
  if (param === "posts") {
    console.log(value.fk);
  }
  count++
});