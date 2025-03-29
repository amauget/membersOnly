const { Router } = require('express')
const router = Router()

//Mount requests to the associated files
router.use('/', require('./index'));
router.use('/register', require('./register'));
router.use('/login', require('./login'));
router.use('/loginFail', require('./loginFail'))
router.use('/logout', require('./logout'))
router.use('/profile', require('./profile'))
router.use('/room', require('./room'))

module.exports = router