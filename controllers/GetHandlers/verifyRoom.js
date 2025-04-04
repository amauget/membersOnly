const pool = require('../../db/pool')
const { htmlEscape } = require('../handleUnsafeChars')

async function verifyRoom(roomValue){
    try{
        const roomName = htmlEscape(roomValue)
        console.log(roomValue)
        const room = await pool.query('SELECT * FROM rooms WHERE roomname = $1', [roomName])
        console.log(room.rows)
        return room.rows
    }
    catch(err){
        console.error(err)
        return false
    }
    
}

module.exports = verifyRoom