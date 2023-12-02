const Router = require('express')
const router = Router()

const routerUser = require('./userRouter')
const routerMovie = require('./movieRouter')

router.use('/user', routerUser)
router.use('/movie', routerMovie)

module.exports = router