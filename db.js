var low = require('lowdb')
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("./database.json");
var db = low(adapter);

db.defaults({ users: []})
.write()


module.exports = db