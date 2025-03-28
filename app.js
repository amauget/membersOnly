const express = require('express')
require('./controllers/passport')

//My objects
const app = express()
const router = require('./routes/0_router')
const passport = require('./controllers/passport')
const exp = require('constants') /* ????? */

//Framwork/Libraries
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
app.use(expressSession({
    store: new pgSession({
        pool: pool,
        tablename: 'session',  // see -- node_modules/connect-pg-simple/table.sql -- for "create table" requirements
    }),
    secret: process.env.FOO_COOKIE_SECRET,
    resave: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    createTableIfMissing: true, //Err Handling
}))

app.use(passport.session())

app.use((req, res, next) => { /* !!!!!FIGURE OUT THE PURPOSE OF THIS!!!!! */
    next()
})

app.use('/', router)

//Inintialize Environment
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})
