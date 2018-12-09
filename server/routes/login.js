const login = require('express').Router()
const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const { loginInfoCheck } = require('../routeGuard')


login.post('/', loginInfoCheck, (req, res, next) => {
  try {
    const token = jwt.sign({ username: req.body.username }, secret, { expiresIn: 24 * 60 * 60 })
    res.send({ msg: '登陆成功', token })
  } catch (err) {
    next(err)
  }
})

module.exports = login