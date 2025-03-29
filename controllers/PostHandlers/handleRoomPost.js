const pool = require('../../db/pool')
const { connect } = require('../../routes')
const { htmlEscape } = require('./handleUnsafeChars')
const { postDate } = require('./timeStamps')

async function handleRoomPost(req, res){
    try{
        const content = htmlEscape(req.body.content)
        const reply = (req.body.reply === 'true') //converts from string to bool
        const username = req.user.username

        // await pool.query('INSERT INTO rooms(roomname, username, time, content, reply) VALUES ($1, $2, $3, $4, $5', [roomName, content, reply, username])
    }
    catch(err){
        console.error(err)
        return res.status(500).redirect('/error')
    }




}

module.exports = handleRoomPost