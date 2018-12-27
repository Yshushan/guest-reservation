const reservation = require('express').Router()
const { userAuthentication } = require('../routeGuard')
const db = require('../db')


reservation.use(userAuthentication)

reservation.post('/submit', (req, res, next) => {
  const users = db.get('users')
  users.updateOne(
    { username: req.username },
    { $push: { records: req.body } }
  ).then(updateRes => res.send({ msg: '提交成功', modifiedCount: updateRes.modifiedCount }))
    .catch(next)
})

reservation.get('/records', (req, res, next) => {
  const users = db.get('users')
  users.findOne(
    { username: req.username },
    { projection: { records: 1, _id: 0 } }
  ).then(doc => res.send(doc.records))
    .catch(next)
})

reservation.get('/searchEmployee', (req, res, next) => {
  const employees = db.get('employees')
  const users = db.get('users')
  employees.findOne(req.query, { projection: { gender: 0 } }, (err, employee) => {
    if (err) return next(err)
    if (employee) {
      res.send(employee)
      users.updateOne(
        { username: req.username },
        { $addToSet: { visit_history: employee } }
      ).then(res => console.log(`modifiedCount: ${res.modifiedCount}`))
        .catch(err => console.log(err))
    }
    else res.send({ msg: '不存在此人' })
  })
})

reservation.get('/getHistory', (req, res, next) => {
  const users = db.get('users')
  users.findOne(
    { username: req.username },
    { projection: { visit_history: 1, _id: 0 } },
  ).then(doc => res.send(doc.visit_history))
    .catch(next)
})

module.exports = reservation