const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    console.log(req.status)
    res.render('error')
})

module.exports = router