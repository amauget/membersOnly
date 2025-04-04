const { Router } = require('express')
const router = Router()
const pool = require('../db/pool')
const restoreText = require('../controllers/GetHandlers/restoreText')

router.get('/', async (req, res, next) => {
    let username = ''
    const roomResult = await pool.query('SELECT DISTINCT roomname FROM rooms')
    const rooms = restoreText(roomResult.rows, 'roomname')
    if(req.user){
        username = req.user.username
    }
    res.render('index', {username: username, rooms: rooms})
})


module.exports = router;