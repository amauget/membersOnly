const crypto = require('crypto')

/* REGISTER HANDLERS */
function comparePasswords(password, secondPassword){
    if(password.length !== secondPassword.length){
        return false
    }
    for(let i = 0; i < password.length; i++){
        if(password[i] !== secondPassword[i]){
            return false
        }
    }
    return true
}

function genPassword(password){
    console.log(password)
    const salt = crypto.randomBytes(32).toString('hex')
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')

    return {
        salt: salt,
        hash: genHash
    }
}

/* LOGIN HANDLER */
function validatePassword(password, hash, salt){
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === hashVerify
}

module.exports = {genPassword, validatePassword, comparePasswords}