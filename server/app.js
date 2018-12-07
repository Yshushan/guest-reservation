const express = require('express')
const app = express()
const morgan = require('morgan')
const config = require('./config')
const db = require('./db')
const register = require('./routes/register')
const login = require('./routes/login')
const reservation = require('./routes/reservation')
const records = require('./routes/records')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'))

app.use('/register', register)
app.use('/login', login)
app.use('/reservation', reservation)
app.use('/records', records)


// 错误处理
app.use((err, req, res, next) => {
  res.status(500).send(err)
})


db.connect()
  .then(msg => {
    console.log(msg)
    app.listen(config.port, () => {
      console.log(`Server is running on localhost:${config.port}...`)
    })
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

