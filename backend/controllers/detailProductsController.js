const fetch = require('node-fetch')

const author = {
  name: 'Andrés',
  lastname: 'Barreto',
}

const getDetailProducts = (req, res, next) => {
  const URL_API = `${process.env.URL_API}`
  /** se declaran los servicios a consultar */
  const apiDetailBase = `${URL_API}${req.baseUrl}`
  const apiDetailProduct = fetch(apiDetailBase)
  const apiDescriptionProduct = fetch(`${apiDetailBase}/description`)

  /** se ejecutan los servicios
   * para obtener el detalle del producto y la descripción del mismo,
   *  se realiza un promiseAll para que se ejecute en paralelo y se
   * puedan obtener los datos en una sola llamada
   */
  Promise.all([apiDetailProduct, apiDescriptionProduct])
    .then(([resDetail, resDescription]) => {
      return Promise.all([resDetail.json(), resDescription.json()])
    })
    .then(([detailProduct, descriptionProduct]) => {
      const { plain_text: description } = descriptionProduct

      const itemData = {
        id: detailProduct.id,
        title: detailProduct.title,
        price: {
          currency: detailProduct.currency_id,
          amount: detailProduct.price,
          decimals: 0,
        },
        picture: detailProduct.thumbnail,
        condition: detailProduct.condition,
        free_shipping: detailProduct.shipping.free_shipping,
        sold_quantity: detailProduct.sold_quantity,
        description: description,
      }

      const dataResponse = {
        ok: true,
        author,
        item: itemData,
      }
      res.json(dataResponse)
    })
}

module.exports = {
  getDetailProducts,
}
