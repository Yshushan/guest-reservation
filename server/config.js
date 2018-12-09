module.exports = {
  port: process.env.PORT || 3000,
  dbName: process.env.DBName || 'guestReservation',
  dbUrl: process.env.DBURL || 'mongodb://127.0.0.1:27017',
  secret: process.env.SECRET || 'jkf34sa3lFA1341ZXF5sdf'
}