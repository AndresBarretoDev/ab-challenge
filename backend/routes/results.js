/**
  Ruta resultados de búsqueda: 

  items results search /items?search=
  https://api.mercadolibre.com/sites/MLA/search?q= 

*/

const { Router } = require('express')
const router = Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({ ok: true, message: 'reloaded' })
})

module.exports = router
