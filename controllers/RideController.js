const { Ride } = require('../models')


const GetRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    res.send(rides)
  } catch (error) {
    throw error
  }
}

const GetRide = async (req, res) => {
  try {
  const ride = await Ride.findById(req.params.ride_id)
res.send(ride)
  } catch (error) {
    throw error
  }
}


const CreateRide = async (req, res) => {
  try {
    const Ride = await Ride.create({ ...req.body })
    res.send(Ride)
  } catch (error) {
    throw error
  }
}

const UpdateRide = async (req, res) => {
  try {
    const Ride = await Ride.findByIdAndUpdate(req.params.ride_id, req.body, {new: true})
    res.send(Ride)
  } catch (error) {
    throw error
  }
}

const DeleteRide = async (req, res) => {
  try {
    await Ride.deleteOne({ _id: req.params.ride_id })
    res.send({ msg: 'Ride Deleted', payload: req.params.ride_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRides,
  GetRide,
  CreateRide,
  UpdateRide,
  DeleteRide
}


