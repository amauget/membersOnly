const passwordUtilities = require('../AuthHandlers/passwordUtilities')
const pool = require('../../db/pool')
const { htmlEscape } = require('../handleUnsafeChars')
const compareChars = require('./compareChars')
const { joinDate } = require('./timeStamps')

async function verifyRegistration({username, password, secondPassword}){
    try{
        const cleanedUsername = htmlEscape(username) //escape dangerous characters
        const cleanedPassword = htmlEscape(password) //only escape the arg that is going to hash 

        const usernameMatch = compareChars(username, cleanedUsername) //prevents usernames w/ dangerous chars
        const passwordMatch = compareChars(cleanedPassword, secondPassword)

        let message = ''
        let registered = false

        if(passwordMatch === true && usernameMatch === true){
            if(await usernameAvailable(cleanedUsername) === true && validChars(username, cleanedUsername) === true){//username is available
                const {hash, salt} = passwordUtilities.genPassword(cleanedPassword) 
                await pool.query('INSERT INTO userData(username, hash, salt, date) VALUES($1, $2, $3, $4)', [cleanedUsername, hash, salt, joinDate()]) //use cleanedUsername to avoid unforseen flaws that allow cross scripting

                registered = true //account has been registered.
            }
            else{
                message = `"${username}" already has an account.`
            }
        }
        else if(passwordMatch === false){
            message = 'Entered passwords do not match.'
        }
        else if(usernameMatch === false){
            message = 'Invalid Username'
        }
        return [registered, message]
    }
    catch(err){
        return err
    } 
}

async function usernameAvailable(username){
    const result = await pool.query('SELECT * FROM userdata WHERE username=$1', [username])
    return result.rows.length > 0 ? false : true
}

function validChars(username, cleanedUsername){
    return username.length === cleanedUsername.length
}
module.exports = {verifyRegistration, validChars}