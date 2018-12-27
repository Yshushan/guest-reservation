module.exports = {
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME || 'guestReservation',
  dbUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017',
  secret: process.env.JWT_SECRET || 'jkf34sa3lFA1341ZXF5sdf'
}