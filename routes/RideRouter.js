const router = require('express').Router()
const controller = require('../controllers/RideController')

router.get('/', controller.GetRides)
router.get('/:ride_id', controller.GetRide)
router.post('/', controller.CreateRide)
router.put('/:ride_id', controller.UpdateRide)
router.delete('/:ride_id', controller.DeleteRide)

module.exports = router
