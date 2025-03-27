const express = require('express')
require('./config/passport')

const path = require('path')
const pool = require('./db/pool')
const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession)
const passport = require('./controllers/passport')

const app = express()
const router = require('./routes/main')
const exp = require('constants')

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
        tablename: 'TBD',    /* !!!!!! ADD TABLE NAME !!!!!!! */
    }),
    secret: process.env.FOO_COOKIE_SECRET,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } 
}))

