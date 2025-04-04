const { Router } = require('express')
const router = Router()
const passport = require('passport')
const verifyRoom = require('../controllers/GetHandlers/verifyRoom')
const { htmlRestore } = require('../controllers/handleUnsafeChars') 
const {handleRoomPost} = require('../controllers/PostHandlers/handleRoomPost')
const restoreText = require('../controllers/GetHandlers/restoreText')

router.get('/:roomValue', async (req, res) => {

    const roomResult = await verifyRoom(req.params.roomValue) //avoid front end DOM manipulation
    if(roomResult.length > 0){
        const room = restoreText(roomResult, 'content')
        res.render('room', {hasAccount:(req.user !== undefined), user: req.user, room: room, roomName: htmlRestore(req.params.roomValue)})
    }
    else{

        res.redirect('/error')
    }
})

router.post('/:roomValue', async (req, res) => {

    const room = await verifyRoom(req.params.roomValue)
    const content = req.body.content
    
    if(room && (content.length <= 280)){
        
        await handleRoomPost(req)  
        const roomName = req.params.roomValue
        res.redirect(`/room/${encodeURIComponent(roomName)}`)
    }
    else{
        res.send('<h1>STATUS 403: FORBIDDEN REQUEST</h1> <a href="/" class="homeLink">Home</a>')
    }
})

module.exports = router