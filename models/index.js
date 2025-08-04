const mongoose = require('mongoose')
const RideSchema = require('./Ride')

const Ride = mongoose.model('Ride', RideSchema)

module.exports = {
  Ride
}
