const { Router } = require('express')
const router = Router()
const passport = require('passport')
const verifyRoom = require('../controllers/GetHandlers/verifyRoom')
const handleRoomPost = require('../controllers/PostHandlers/handleRoomPost')


router.get('/:roomValue', async (req, res) => {
    const room = await verifyRoom(req.params.roomValue) //avoid front end DOM manipulation
    if(room){
        res.render('room', {hasAccount:(req.user !== undefined), room: room, roomName: req.params.roomValue})
    }
    else{
        res.redirect('/error')
    }
})

router.post('/:roomValue', async (req, res) => {
    const room = await verifyRoom(req.params.roomValue)
    if(room){
        await handleRoomPost(req)  
        const roomName = req.params.roomValue
        res.redirect(`/room/${roomName}`)
    }
    else{
        res.redirect('/error')
    }
})

module.exports = router