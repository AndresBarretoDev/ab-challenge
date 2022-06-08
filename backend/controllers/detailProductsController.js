const fetch = require('node-fetch')

const author = {
  name: 'Andrés',
  lastname: 'Barreto',
}

const getDetailProducts = (req, res, next) => {
  const URL_API = `${process.env.URL_API}`
  const apiDetailBase = `${URL_API}${req.baseUrl}`
  const apiDetailProduct = fetch(apiDetailBase)
  const apiDescriptionProduct = fetch(`${apiDetailBase}/description`)

  Promise.all([apiDetailProduct, apiDescriptionProduct])
    .then(([resDetail, resDescription]) => {
      return Promise.all([resDetail.json(), resDescription.json()])
    })
    .then(([detailProduct, descriptionProduct]) => {
      const {
        id,
        title,
        condition,
        thumbnail: picture,
        shipping,
        sold_quantity,
      } = detailProduct
      const { plain_text: description } = descriptionProduct
      const itemData = {
        id,
        title,
        price: {
          currency: detailProduct.currency_id,
          amount: detailProduct.price,
          decimals: 0,
        },
        picture,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description,
      }
      const dataResponse = {
        ok: true,
        author,
        item: itemData,
      }
      // console.log('response final', detailProduct)

      res.json(dataResponse)
    })
}

module.exports = {
  getDetailProducts,
}
