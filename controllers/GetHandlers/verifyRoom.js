const pool = require('../../db/pool')
const { htmlEscape } = require('../handleUnsafeChars')

async function verifyRoom(req, res){
    try{
        const roomName = htmlEscape(req.query.roomValue)
        const room = await pool.query('SELECT * FROM rooms WHERE roomname = $1', [roomName])
        return room.rows
    }
    catch(err){
        console.error(err)
        return false
    }
    
}

module.exports = verifyRoom