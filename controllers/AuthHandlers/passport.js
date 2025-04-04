const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const pool = require('../../db/pool')
const passwordUtilities = require('./passwordUtilities')

const customFields = { //insurance policy.. make sure the login inputs are recognized.
    username: 'username',
    password: 'password'
}

const verifyLogin = (username, password, done) => {
        pool.query('SELECT * FROM userdata WHERE username=$1', [username])
            .then((result) => {
                const user = result.rows[0]
                if(!user){//invalid username
                    return done(null, false)
                }

                const isValid = passwordUtilities.validatePassword(password, user.hash, user.salt)
                if(isValid){
                    return done(null, user) //valid credentials
                }

                return done(null, false) //invalid credentials
            })
            .catch((error) => {
                done(error)
            })
}

passport.serializeUser((user, done) => { 
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
    try{
        const { rows } = await pool.query('SELECT * FROM userdata WHERE id = $1', [id])
        const user = rows[0]

        done(null, user)
    }
    catch(err){
        console.error(err)
        done(err)
        /* ADD DOM BEHAVIOR HERE */
    }
})

//implement custom "verifyLogin" strategy
const strategy = new LocalStrategy(customFields, verifyLogin)
passport.use(strategy)

module.exports = passport