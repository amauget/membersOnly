const pool = require('./pool')
async function cleanupSessions(){
    try{
        console.log('cleanup Sessions')
        const sessionsQuery = await pool.query('SELECT * FROM session')
        console.log(sessionsQuery.rows)
    }
    catch(err){
        console.error(err)
        return
    }

}

cleanupSessions()

module.exports = cleanupSessions