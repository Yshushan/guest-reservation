module.exports = {
  port: process.env.PORT || 3000,
  dbName: process.env.DBName || 'guestReservation',
  dbUrl: process.env.DBURL || 'mongodb://127.0.0.1:27017'
}