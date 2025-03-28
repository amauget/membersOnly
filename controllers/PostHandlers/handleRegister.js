const passwordUtilities = require('../passwordUtilities')

async function verifyRegistration(username, password, secondPassword, done){
    try{
        if(passwordUtilities.comparePasswords(password, secondPassword) === true){
            const usernameTaken = await queryUsername(username)
    
            if(usernameTaken){//username is taken
                return done(null, false)
            }
            const hashData = passwordUtilities.genPassword(password)
            const hash = hashData.hash
            const salt = hashData.salt

            await pool.query('INSERT INTO userData(username, hash, salt) VALUES($1, $2, $3)', [username, hash, salt])
            
            return done(null, true) //account has been created.
        }
        else{
            return done(null, false)
        }
    }
    catch(err){
        return done(null, err)
    }
    
}

async function queryUsername(username){
    const result = await pool.query('SELECT * FROM userdata WHERE username=$1', [username])
    return result.rows.length > 0 ? true : false
}
module.exports = verifyRegistration