/**
  Ruta detalle del pedido: 

https://api.mercadolibre.com/items/:id
https://api.mercadolibre.com/items/:id/description

*/

const { Router } = require('express')
const { getDetailProducts } = require('../controllers/detailProductsController')
const router = Router()

/* GET detail products listing. */
router.get('/', getDetailProducts)

module.exports = router
