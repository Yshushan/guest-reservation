const MongoClient = require('mongodb').MongoClient
const { dbName, dbUrl } = require('./config')

let connection = null;

// module.exports.connect = () => new Promise((resolve, reject) => {
//   MongoClient.connect(config.dbUrl, { useNewUrlParser: true }, (err, client) => {
//     if (err) return reject(err)
//     resolve('database connected')
//     connection = client
//   })
// })

// module.exports.get = () => {
//   if (!connection) {
//     throw new Error('Call connect first!')
//   }
//   return connection.db(config.dbName)
// }

class Mongo {
  async connect() {
    connection = await MongoClient.connect(dbUrl, { useNewUrlParser: true })
    return 'database connected'
  }  

  get(collName) {
    if (!connection) throw new Error('connect database first!')
    return connection.db(dbName).collection(collName)
  }
}

module.exports = new Mongo()