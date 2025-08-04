const router = require('express').Router()
const controller = require('../controllers/RideController')

router.get('/', controller.GetRides)
<<<<<<< HEAD
router.get('/:ride_id', controller.GetRide)
router.post('/', controller.CreateRide)
router.put('/:ride_id', controller.UpdateRide)
=======
router.post('/', controller.CreateRide)

router.get('/:ride_id', controller.ShowRide)
router.put('/:ride_id', controller.UpdatePost)
>>>>>>> ada96262de9cabb77c7140439a619972ac426145
router.delete('/:ride_id', controller.DeleteRide)

module.exports = router
