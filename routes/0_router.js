const { Router } = require('express')
const router = Router()

//Mount requests to the associated files
router.use('/', require('./index'));
router.use('/register', require('./register'));
router.use('/login', require('./login'));
router.use('/logout', require('./logout'))
router.use('/profile', require('./profile'))

module.exports = router