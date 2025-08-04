const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

try {
  console.log('connected to DB')
} catch (error) {
  console.log(error)
}

const db = mongoose.connection

module.exports = db
