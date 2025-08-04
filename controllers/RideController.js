const { Ride } = require('../models')

const GetRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    res.send(rides)
  } catch (error) {
    console.log(error)
  }
}

const CreateRide = async (req, res) => {
  try {
    const ride = await Ride.create({ ...req.body })
    res.send(ride)
  } catch (error) {
    console.log(error)
  }
}

const ShowRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.ride_id)
    res.send(ride)
  } catch (error) {
    console.log(error)
  }
}

const UpdatePost = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndUpdate(req.params.ride_id, req.body, {
      new: true
    })
    res.send(ride)
  } catch (error) {
    console.log(error)
  }
}

const DeleteRide = async (req, res) => {
  try {
    await Ride.deleteOne({ _id: req.params.ride_id })
    res.send({ msg: 'ride deleted', payload: req.params.ride_id, status: 'ok' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { GetRides, CreateRide, ShowRide, UpdatePost, DeleteRide }
