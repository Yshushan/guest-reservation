const register = require('express').Router()
const { registerInfoCheck, registerExistenceCheck } = require('../routeGuard')
const getUsers = require('../collections/users')

/* async/await 风格 */
register.post('/', registerInfoCheck, registerExistenceCheck, async (req, res, next) => {
  try {
    const users = await getUsers()
    const insertedRes = await users.insertOne(req.body)
    res.send({
      msg: '注册成功',
      insertedCount: insertedRes.insertedCount
    })
  } catch (e) {
    next(e)
  }
})


/* promise 风格  */
/* 
register.post('/', registerInfoCheck, registerExistenceCheck, (req, res, next) => {
  getUsers()
    .then(users => users.insertOne(req.body))
    .then(insertedRes => {
      res.send({
        msg: '注册成功',
        insertedCount: insertedRes.insertedCount
      })
    })
    .catch(next)
})
*/
module.exports = register