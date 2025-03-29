const { Router } = require('express')
const router = Router()
const passport = require('passport')
const verifyRegistration = require('../controllers/PostHandlers/handleRegister')

router.get('/', (req, res, next) => {
    console.log(req.user)
    res.render('profile', {user: req.user})
})

module.exports = router