const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
    console.log('INDEX')
    res.render('index')
})


module.exports = router;