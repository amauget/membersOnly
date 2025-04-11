const { post } = require("../../routes")

function joinDate(){
    const now = (new Date()).toString()
    //the 4th space of Date() marks the end (dayOfWeek, Month, Calendar Day, Year)
    let spaces = 0
    let dateOnly = '' 
    for(let i of now){
        if(i === ' '){
            spaces ++
        }
        if(spaces === 4){
            break
        }
        dateOnly += i
    }
    return dateOnly
}

function postDate(){
    const now = (new Date()).toString()
    let spaces = 0
    let dateTime = ''

    for(let i of now){
        if(i === ' '){
            spaces ++
        }
        if(spaces === 5){ //stops after time of day
            break
        }
        dateTime += i
    }
    return dateTime
}


module.exports = { joinDate, postDate }