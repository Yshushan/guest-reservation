const reservation = require('express').Router()
const { userAuthentication } = require('../routeGuard')
const db = require('../db')

reservation.use(userAuthentication)

reservation.post('/submit', (req, res, next) => {

})

reservation.get('/records', (req, res, next) => {

})

reservation.get('/searchEmployee', (req, res, next) => {
  const employees = db.get('employees')
  employees.findOne(req.query, (err, employee) => {
    if (err) return next(err)
    if (employee) res.send(employee)
    else res.send({ msg: '不存在此人' })
  })
})

reservation.get('/addHistory', (req, res, next) => {

})

module.exports = reservation