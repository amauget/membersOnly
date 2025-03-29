const { Router } = require('express')
const router = Router()
const passport = require("passport")

router.get('/', (req, res) => {
    res.render('login', {message: 'Invalid username or password'})
})

module.exports = router