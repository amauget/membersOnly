const { htmlRestore } = require("../handleUnsafeChars")

function restoreText(data){
    for(let item of data){
        item.content = htmlRestore(item.content)
    }        
    return data
}

module.exports = restoreText