const express = require('express')

//My objects
const app = express()
const router = require('./routes/0_router')
const passport = require('./controllers/AuthHandlers/passport')

//Frameworks/Libraries
const path = require('path')
const pool = require('./db/pool')
const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession)

//app config
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const assetPath = path.join(__dirname, 'public')

app.use(express.static(assetPath))

//EJS
app.set('view engine', 'ejs')
app.set('veiw', path.join(__dirname, 'views'))

//Express Session
const sessionStore = new pgSession({
    pool: pool,
    tablename: 'session',  // see -- node_modules/connect-pg-simple/table.sql -- for "create table" requirements
})

app.use(expressSession({
    store: sessionStore,
    secret: process.env.FOO_COOKIE_SECRET,
    resave: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 *  1000 },
    saveUninitialized: false,
    createTableIfMissing: true, //Err Handling
}))

//session DB Cleanup
setInterval(() => {
    try{
        sessionStore.pruneSessions()
        console.log('Session Pruned')
    }
    catch(err){
        console.error('Failed to prune session db: ', err)
    }
}, 60 * 60 * 1000)

app.use(passport.session())

app.use('/', router)

//Inintialize Environment
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})
