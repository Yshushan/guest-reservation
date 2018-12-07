const Joi = require('joi')
const bcrypt = require('bcrypt')
const db = require('../db')

const registerSchema = {
  username: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
  email: Joi.string().email().required()
}

function userInfoCheck(req, res, next) {
  const { error, value } = Joi.validate(req.body, registerSchema)
  if (error) return res.status(400).send(error)
  else next()
}

function userExistenceCheck(req, res, next) {
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


module.exports = {
  userInfoCheck,
  userExistenceCheck
}