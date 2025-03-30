const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
    let username = ''
    if(req.user){
        username = req.user.username
    }
    res.render('index', {username: username})
})


module.exports = router;