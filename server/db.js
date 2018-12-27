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

module.exports = class {
  // 链接数据库
  static async connect() {
    connection = await MongoClient.connect(dbUrl, { useNewUrlParser: true })
    return 'database connected'
  }

  // 获取指定的 collection (非严格模式)
  static get(collName) {
    if (!connection) throw new Error('connect database first!')
    return connection.db(dbName).collection(collName)
  }

  // 获取数据库
  static db() {
    if (!connection) throw new Error('connect database first!')
    return connection.db(dbName)
  }
}