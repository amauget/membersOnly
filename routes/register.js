const { Router } = require('express')
const router = Router()
const passport = require('passport')
const { verifyRegistration } = require('../controllers/PostHandlers/handleRegister')

router.get('/', (req, res, next) => {
    res.render('register', {message: ''})
})

router.post('/', async (req, res, next) =>{
    const [registered, message] = await verifyRegistration(req.body)
    /* CHANGE ID GENERATION TO SOMETHING MORE VERBOSE! */

    if(registered === true){
        res.status(200).redirect('/')
    }
    else{
        res.render('register', {message: message})
    }
})


module.exports = router;