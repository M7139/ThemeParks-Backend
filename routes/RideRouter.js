const router = require('express').Router()
const controller = require('../controllers/RideController')

router.get('/', controller.GetRides)
router.post('/', controller.CreateRide)

router.get('/:ride_id', controller.ShowRide)
router.put('/:ride_id', controller.UpdatePost)
router.delete('/:ride_id', controller.DeleteRide)

module.exports = router
