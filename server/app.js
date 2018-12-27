const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const { port } = require('./config')
const db = require('./db')
const register = require('./routes/register')
const login = require('./routes/login')
const reservation = require('./routes/reservation')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(cors())

app.use('/register', register)
app.use('/login', login)
app.use('/reservation', reservation)



// 错误处理
app.use((err, req, res, next) => {
  res.status(500).send(err)
})


db.connect()
  .then(msg => {
    console.log(msg)
    app.listen(port, () => {
      console.log(`Server is running at localhost:${port}...`)
    })
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

