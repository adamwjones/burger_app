const connection = require("./connection.js");

const orm = {
  selectAll: function () {
    const queryString = "SELECT * FROM burgers_db";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function () {
    const queryString = "INSERT INTO burgers_db VALUE ?";
    connection.query(queryString, [newBurger], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  //borrowed updateOne from master
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
