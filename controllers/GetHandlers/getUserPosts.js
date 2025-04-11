const pool = require('../../db/pool')
const { htmlEscape } = require('../handleUnsafeChars')
const restoreText = require('./restoreText')

async function getUserPosts(user){
    const cleanUsername = htmlEscape(user.username)
    const userPostQuery = await pool.query('SELECT * FROM rooms WHERE username = $1', [cleanUsername])
    
    let userPosts = restoreText(userPostQuery.rows, 'roomname')
    userPosts = restoreText(userPosts, 'content')

    return userPosts
}

module.exports = getUserPosts