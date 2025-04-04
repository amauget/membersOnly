const pool = require('./pool')

async function removeCookie(req){
    console.log(req.session)
    return await pool.query('DELETE FROM session WHERE sess = $1', [JSON.parse(req.session)])
}

module.exports = removeCookie
