const db = require('../db')

db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['username', 'password', 'email'],
      properties: {
        username: {bsonType: 'string'},
        password: {bsonType: 'string'},
        email: {bsonType: 'string'}
      }
    }
  }
}, (err, client) => {
  if(err) throw err
  console.log('success', client)
})