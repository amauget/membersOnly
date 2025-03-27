const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const pool = require('../db/pool')

const comparePasswords = require('./comparePasswords')

const verifyRegistration = (username, password, secondPassword, done) => {

}


module.exports = passport