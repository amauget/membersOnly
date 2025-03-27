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

console.log(comparePasswords('asdf','asd'))

module.exports = comparePasswords