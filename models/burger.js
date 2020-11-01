const orm = require("../config/orm.js");

// var burger = {
//   all: function (cb) {
//     orm.all("burgers", function (res) {
//       cb(res);
//     });
//   },
//   create: function (name, cb) {
//     orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//   },
//   update: function (id, cb) {
//     var condition = "id=" + id;
//     orm.update(
//       "burgers",
//       {
//         devoured: true,
//       },
//       condition,
//       cb
//     );
//   },
// };

const burger = {
  selectAll(cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne(col, val, cb) {
    orm.insertOne("burgers", col, val, (res) => {
      cb(res);
    });
  },
  updateOne(id, cb) {
    orm.updateOne("burgers", id, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
