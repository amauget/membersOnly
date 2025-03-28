const { Router } = require('express')
const router = Router()
// const passport = require('passport')
// const pool = require('../db/pool')

//Mount requests to the associated files
router.use('/', require('./index'));
router.use('/register', require('./register'));
router.use('/login', require('./login'));


module.exports = router