const { Router } = require('express')
const router = Router()
const removeCookie = require('../db/removeCookie')

router.get('/', async(req, res, next) => {
  console.log(req.session)
  try{
    // await removeCookie(req)
    req.logout((err) => { // passport built-in
      if (err) {
        return next(err)
      }
      
      res.redirect('/')
    })
  }catch(err){
    console.error(err)
    res.redirect('/error')
  }
 
})

module.exports = router