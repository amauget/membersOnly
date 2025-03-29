const { Router } = require('express')
const router = Router()
const passport = require("passport")

router.get('/', (req, res, next) => {
    res.render('login', {message: ''})
})

router.post('/', passport.authenticate('local', { failureRedirect:'/loginFail', successRedirect:'/'}))

module.exports = router