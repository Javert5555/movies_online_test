const Router = require('express')
const router = Router()
const movieController = require('../controllers/movieController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), movieController.create)
router.put('/update/:id', checkRole('ADMIN'), movieController.update)
router.delete('/delete/:id', checkRole('ADMIN'), movieController.delete)
router.get('/list', movieController.list)

module.exports = router