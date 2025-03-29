const { Router } = require('express')
const router = Router()
const passport = require('passport')
const handleRoomPost = require('../controllers/PostHandlers/handleRoomPost')

router.get('/', (req, res) => {
    console.log(req.query)
    res.render('room', {user: JSON.stringify(req.user)})
})

router.post('/', async (req, res) => {
    /* NOTE FOR NEXT WEEK:
        figure out how to securely attach room name to post requests (and adding new rooms)
    */
    await handleRoomPost(req, res)

})

module.exports = router