const orm = require("../config/orm.js");

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne(name, cb) {
    orm.insertOne("burgers",['burger_name', 'devoured'], [name, false], (res) => {
      cb(res);
    });
  },
  updateOne(id, cb) {
    var condition = 'id=' + id;
    orm.updateOne("burgers", {devoured: true}, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
