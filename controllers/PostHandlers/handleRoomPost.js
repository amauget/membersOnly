const pool = require('../../db/pool')
const { htmlEscape } = require('../handleUnsafeChars')
const { postDate } = require('./timeStamps')


async function handleRoomPost(req){
    try{
        const id = crypto.randomUUID()
        const roomName = htmlEscape(req.params.roomValue)
    
        const content = htmlEscape(req.body.content)

        const username = req.user.username

        await pool.query('INSERT INTO rooms(id, roomname, username, time, content) VALUES($1, $2, $3, $4, $5)', [id, roomName, username, postDate(), content])
        return true
    }
    catch(err){
        console.error(err)
        return false
    }
}


module.exports = { handleRoomPost }