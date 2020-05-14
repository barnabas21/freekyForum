// MongoDB configuration
const MongoClient = require('mongodb').MongoClient
//MongoClient.connect('mongodb://localhost/freekyForum', (err, connection) => {
MongoClient.connect('mongodb://underTaker:2105@freeky-shard-00-00-bo61u.mongodb.net:27017,freeky-shard-00-01-bo61u.mongodb.net:27017,freeky-shard-00-02-bo61u.mongodb.net:27017/freekyForum?ssl=true&replicaSet=freeky-shard-0&authSource=admin&retryWrites=true&w=majority', (err, connection) => {
  if (err) {console.warn('error from db.js'); console.log(err)}
  else {
    module.exports.db = connection // So db is availbe everywhere by requiring this file
    console.log('Connected to mongodb successfully.')
  }
})
