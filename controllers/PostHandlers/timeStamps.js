function joinDate(){
    const now = (new Date()).toString()
    //the 4th space of Date() marks the end (dayOfWeek, Month, Calendar Day, Year)
    let spaces = 0
    let myDate = '' 
    for(let i of now){
        if(i === ' '){
            spaces ++
        }
        if(spaces === 4){
            break
        }
        myDate += i
    }
    return myDate
}

module.exports = joinDate