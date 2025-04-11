const { Router } = require('express')
const router = Router()
const verifyRoom = require('../controllers/GetHandlers/verifyRoom')
const { handleRoomPost } = require('../controllers/PostHandlers/handleRoomPost')

router.get('/', (req, res) =>{
    if(req.user){
        res.render('createRoom')
    }
    else{
        res.redirect('/login')
    }
})

router.post('/', async (req, res) => {
    const roomAvail = ((await verifyRoom(req.body.roomName)).length === 0)
    if(roomAvail){
        req.params.roomValue = req.body.roomName //refactor.. "handleRoomPost requires req.params" which is undefined here
        await handleRoomPost(req)

        res.redirect(`/room/${encodeURIComponent(req.body.roomName)}`)
    }
})

module.exports = router