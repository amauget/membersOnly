const { Router } = require('express')
const router = Router()
const passport = require('passport')

router.get('/', (req, res, next) => {
    res.render('register')
})

router.post('/', (req, res, next) =>{
    console.log(req.body)
})


module.exports = router;