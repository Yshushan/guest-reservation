const Joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('./db')
const { secret } = require('./config')

const registerSchema = {
  username: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
  email: Joi.string().email().required()
}


function registerInfoCheck(req, res, next) {
  const { error, value } = Joi.validate(req.body, registerSchema)
  if (error) return res.status(400).send(error)
  else next()
}

function registerExistenceCheck(req, res, next) {
  const users = db.get('users')
  users.findOne({ username: req.body.username }, (err, user) => {
    if (err) return next(err)
    if (user) res.send({ msg: `用户名${req.body.username}已存在` })
    else {
      users.findOne({ email: req.body.email }, (err, user) => {
        if (err) return next(err)
        if (user) res.send({ msg: `邮箱已经被注册过` })
        else {
          const hash = bcrypt.hashSync(req.body.password, 10)
          req.body.password = hash
          next()
        }
      })
    }
  })
}

function loginInfoCheck(req, res, next) {
  const users = db.get('users')
  users.findOne({ username: req.body.username }, (err, user) => {
    if (err) return next(err)
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) next()
      else res.send({ msg: '密码错误' })
    } else res.send({ msg: '用户名不存在' })
  })
}

function userAuthentication(req, res, next) {
  try {
    const payload = jwt.verify(req.get('token'), secret)
    req.username = payload.username
    next()
  } catch (err) {
    res.send({msg: '请登录', error: err})
  }
  
}

module.exports = {
  registerInfoCheck,
  registerExistenceCheck,
  loginInfoCheck,
  userAuthentication
}