const crypto = require('crypto')

function genPassword(password){
    const salt = crypto.randomBytes(32).toString('hex')
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')

    return {
        salt: salt,
        hash: genHash
    }
}

function validPassword(password, hash, salt){
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return hash === hashVerify
}

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

module.exports = {comparePasswords}