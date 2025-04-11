const { Router } = require('express')
const router = Router()

router.use('/', require('./index'));
router.use('/register', require('./register'));
router.use('/login', require('./login'));
router.use('/loginFail', require('./loginFail'))
router.use('/logout', require('./logout'))
router.use('/profile', require('./profile'))
router.use(`/room`, require('./room'))
router.use('/createRoom', require('./createRoom'))
router.use('/error', require('./error'))

module.exports = router