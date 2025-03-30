const pool = require('../../db/pool')
const { htmlEscape } = require('../handleUnsafeChars')
const { postDate } = require('./timeStamps')

async function handleRoomPost(req){
    try{
        const id = crypto.randomUUID()
        console.log(req.params)
        const roomName = htmlEscape(req.params.roomValue)
        const content = htmlEscape(req.body.content)
        const reply = (req.body.reply === 'true') //converts from string to bool
        const username = req.user.username

        await pool.query('INSERT INTO rooms(id, roomname, username, time, content, reply) VALUES($1, $2, $3, $4, $5, $6)', [id, roomName, username, postDate(), content, reply])
        return true
    }
    catch(err){
        console.error(err)
        return false
    }
}

module.exports = handleRoomPost