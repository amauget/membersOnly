const { Router } = require('express')
const router = Router()
const passport = require('passport')
const verifyRegistration = require('../controllers/PostHandlers/handleRegister')
const getUserPosts = require('../controllers/GetHandlers/getUserPosts')

router.get('/:username', async (req, res, next) => {
    console.log(req.params)
    if(req.user){
        const userPosts = await getUserPosts(req.params)
        res.render('profile', {user: req.params, posts: userPosts})
    }
    else{
        res.redirect('/login')
    }

})

module.exports = router