const { Router } = require('express')
const router = Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express home' })
})

module.exports = router
