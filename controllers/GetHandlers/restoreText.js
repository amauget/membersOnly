const { htmlRestore } = require("../handleUnsafeChars")

function restoreText(data, key){
    for(let item of data){
        item[key] = htmlRestore(item[key])
    }        
    return data
}

module.exports = restoreText