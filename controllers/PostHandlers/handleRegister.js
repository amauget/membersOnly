const passwordUtilities = require('../passwordUtilities')
const pool = require('../../db/pool')

async function verifyRegistration({username, password, secondPassword}){
    try{
        let message = ''
        let registered = false
        if(passwordUtilities.comparePasswords(password, secondPassword) === true){
    
            if(await usernameAvailable(username) === true){//username is available
                const {hash, salt} = passwordUtilities.genPassword('password') 

                await pool.query('INSERT INTO userData(username, hash, salt) VALUES($1, $2, $3)', [username, hash, salt])
                
                registered = true //account has been registered.
            }
            else{
                message = `"${username}" already has an account.`
            }
        }
        else{
            message = 'Entered passwords do not match.'
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

module.exports = verifyRegistration