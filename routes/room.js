const { Router } = require('express')
const router = Router()
const passport = require('passport')

router.get('/', (req, res) => {
    console.log(req.user)
    res.render('room', {user: JSON.stringify(req.user)})
})

module.exports = router