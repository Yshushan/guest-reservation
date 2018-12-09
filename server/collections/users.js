const db = require('../db')

const users = db.get('users')

class Users {
  
  findByName(name){
    users.findOne({username: name})
  }
}
