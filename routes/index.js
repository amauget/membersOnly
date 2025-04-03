const { Router } = require('express')
const router = Router()
const pool = require('../db/pool')

router.get('/', async (req, res, next) => {
    let username = ''
    const rooms = await pool.query('SELECT DISTINCT roomname FROM rooms')
    if(req.user){
        username = req.user.username
    }
    res.render('index', {username: username, rooms: rooms.rows})
})


module.exports = router;