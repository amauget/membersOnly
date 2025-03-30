const { Router } = require('express')
const router = Router()
const passport = require('passport')
const verifyRoom = require('../controllers/GetHandlers/verifyRoom')
const handleRoomPost = require('../controllers/PostHandlers/handleRoomPost')

router.get('/', async (req, res) => {
    const room = await verifyRoom(req)
    if(room){
        const roomName = room[0].roomname
        res.render('room', {hasAccount:(req.user !== undefined), room: room, roomName: roomName})
    }
    else{
        res.redirect('/error')
    }
})

router.post('/', async (req, res) => {
    const room = await verifyRoom(req)

   console.log(req.body)
    // await handleRoomPost(req, res)

})

module.exports = router