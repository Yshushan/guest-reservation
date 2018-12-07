const register = require('express').Router()
const registerGuard = require('../middleware/registerGuard')

const db = require('../db')


register.use(
  registerGuard.userInfoCheck,
  registerGuard.userExistenceCheck,
)

register.post('/', (req, res, next) => {
  const users = db.get('users')
  users.insertOne(req.body, (err, insertedRes) => {
    if (err) next(err)
    else res.send({
      msg: '恭喜，注册成功',
      insertedCount: insertedRes.insertedCount
    })
  })
})

module.exports = register