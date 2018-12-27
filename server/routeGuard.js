const Joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('./db')
const getUsers = require('./collections/users')
const { secret } = require('./config')

const registerSchema = {
  username: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
  email: Joi.string().email().required()
}


function registerInfoCheck(req, res, next) {
  const { error } = Joi.validate(req.body, registerSchema)
  if (error) res.status(400).send({ errMsg: error.details[0].message })
  else next()
}

/* promise 风格 */
/* 
function registerExistenceCheck(req, res, next) {
  const users = db.get('users')
  Promise.all([
    users.findOne({ username: req.body.username }),
    users.findOne({ email: req.body.email })
  ])
    .then(([user1, user2]) => {
      if (user1) res.send({ result: 'fail', msg: '用户名已存在！' })
      else if (user2) res.send({ result: 'fail', msg: '邮箱已被注册过!' })
      else {
        const hash = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hash
        next()
      }
    })
    .catch(next)
}
*/

/* async/await 风格 */
async function registerExistenceCheck(req, res, next) {
  try {
    const users = await getUsers()
    const [user1, user2] = await Promise.all([
      users.findOne({ username: req.body.username }),
      users.findOne({ email: req.body.email })
    ])
    if (user1) res.send({ result: 'fail', msg: '用户名已存在！' })
    else if (user2) res.send({ result: 'fail', msg: '邮箱已被注册过!' })
    else {
      const hash = await bcrypt.hash(req.body.password, 10)
      req.body.password = hash
      next()
    }
  } catch (e) {
    next(e)
  }
}





/* callback 风格 */
/* 
function loginInfoCheck(req, res, next) {
  const users = db.get('users')
  users.findOne({ username: req.body.username }, (err, user) => {
    if (err) return next(err)
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) next()
      else res.send({ result: 'fail', msg: '密码错误' })
    } else res.send({ result: 'fail', msg: '用户名不存在' })
  })
}
*/

/* async/await 风格 */
async function loginInfoCheck(req, res, next) {
  try {
    const users = await getUsers()
    const user = await users.findOne({ username: req.body.username })
    if (user) {
      const passed = await bcrypt.compare(req.body.password, user.password)
      if (passed) next()
      else res.send({ result: 'fail', msg: '密码错误' })
    } else res.send({ result: 'fail', msg: '用户名不存在' })
  } catch (err) {
    next(err)
  }
}

function userAuthentication(req, res, next) {
  try {
    const token = req.get('authorization').split(' ')[1]
    const payload = jwt.verify(token, secret)
    req.username = payload.username
    next()
  } catch (err) {
    res.send({ msg: '请登录', error: err })
  }
}

module.exports = {
  registerInfoCheck,
  registerExistenceCheck,
  loginInfoCheck,
  userAuthentication
}