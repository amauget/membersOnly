const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const pool = require('../db/pool')



const verifyRegistration = (username, password, secondPassword, done) => {
    // if(passwordUtilities.comparePasswords(password, secondPassword) === true){
    //     pool.query('SELECT * FROM userdata WHERE username=$1', [username])
    //         .then((result) => {
    //             const user = result.rows[0].username
    //             if(user){//username is taken
    //                 return done(null, false)
    //             }
    //             const passwordData = passwordUtilities.genPassword(password)
    //             const hash = passwordData.hash
    //             const salt = passwordData.salt
    //         })
    //         .catch((error) => {
    //             done(error)
    //         })
    // }
    // else{
    //     return done(null, false)
    // }
}


module.exports = passport