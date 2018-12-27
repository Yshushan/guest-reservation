const connection = require('../db')
const { getCollection } = require('../helpers')

const schema = {
  bsonType: 'object',
  required: ['username', 'password', 'email'],
  properties: {
    username: {
      bsonType: 'string'
    },
    password: {
      bsonType: 'string'
    },
    email: {
      bsonType: 'string'
    }
  }
}

/* Better */
module.exports = async () => {
  const db = connection.db()
  let users = await getCollection(db, 'users')
  if (!users) {
    users = await db.createCollection('users', {
      validator: {
        $jsonSchema: schema
      }
    })
    await users.createIndex(
      { username: 1 },
      { unique: true }
    )
  }
  return users
}

/* It's ok */
/* 
module.exports = () => {
  return new Promise((resolve, reject) => {
    connection
      .db()
      .collection('users', { strict: true }, (err, coll) => {
        if (err) {
          db.createCollection('users', {
            validator: {
              $jsonSchema: schema
            }
          }, (err, newColl) => {
            if (err) reject(err)
            else {
              newColl.createIndex(
                { username: 1 },
                { unique: true },
                (err, res) => {
                  if (err) reject(err)
                  else resolve(newColl)
                })
            }
          })
        } else resolve(coll)
      })
  })
}
*/
