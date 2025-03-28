function compareChars(firstString, secondString){
    if(firstString.length !== secondString.length){
        return false
    }
    for(let i = 0; i < firstString.length; i++){
        if(firstString[i] !== secondString[i]){
            return false
        }
    }
    return true
}

module.exports = compareChars