const { Router } = require('express')
const router = Router()
const passport = require('passport')

router.get('/', (req, res, next) => {
    req.logout((err) => { // passport built-in
        if (err) {
          return next(err)
        }
      // req.session.destroy()
        res.redirect('/')
      })
})

module.exports = router