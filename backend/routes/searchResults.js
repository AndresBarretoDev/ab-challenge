/**
  Ruta resultados de búsqueda: 

  items results search /items?search=
  https://api.mercadolibre.com/sites/MLA/search?q= 

*/

const { Router } = require('express')
const { getSearchResults } = require('../controllers/searchProductController')
const router = Router()

/* GET  search results listing. */
router.get('/', getSearchResults)

module.exports = router
