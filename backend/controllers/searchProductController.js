const fetch = require('node-fetch')

const author = {
  name: 'Andrés',
  lastname: 'Barreto',
}

const getSearchResults = async (req, res, next) => {
  /** se arma la url del api a consumir */
  const URL_API = `${process.env.URL_API}/sites/MLA/search?q=`

  /** se obtiene el query de la url para enviar la petición */
  const { search } = req.query
  const endpoint = `${URL_API}${search}`

  /** inicia la consulta del servicio, en el transcurso de la petición se hace un promiseAll
   * para obtener el listado de categorias a las cuales pertenece el producto
   */
  fetch(endpoint)
    .then((res) => res.json())
    .then(({ results }) => {
      /** se obtiene el id de la categoria de los productos recibidos*/
      const listCategoryId = results.map((item) => item.category_id)
      /** se hace un filtro de la categoria con mas productos obtenidos */
      const cats = getMostCategorieResult(listCategoryId)
      const items = results.map((item) => {
        const itemData = {
          id: item.id,
          title: item.title,
          condition: item.condition,
          picture: item.thumbnail,
          free_shipping: item.shipping.free_shipping,
          price: {
            id: item.prices.id,
            currency: item.prices.prices[0].currency_id,
            amount: item.prices.prices[0].amount,
            decimals: 0,
          },
        }
        return itemData
      })
      Promise.all([cats]).then((categories) => {
        const dataResponse = {
          ok: true,
          author,
          categories: categories[0],
          items: items,
        }
        res.json(dataResponse)
      })
    })
    .catch((err) => {
      res.send(err)
    })
}

/** se hace un filtro basado en la categoría que más resultados obtuvo */
const getMostCategorieResult = async (categories) => {
  let mostResults = ''
  let max = 0
  for (let i = 0; i < categories.length; i++) {
    let counter = 0
    for (let j = 1; j < categories.length - 1; j++) {
      categories[i] === categories[j] ? counter++ : counter
    }

    if (counter > max) {
      mostResults = categories[i]
      max = counter
    }
  }

  return getBreadCrumb(mostResults)
}
/** consulta del servicio de categorias por el id de la categoria que con mas resultados */
const getBreadCrumb = async (catId) => {
  const apiCategories = `${process.env.URL_API}/categories/${catId}`

  try {
    const response = await fetch(apiCategories)
    const { path_from_root } = await response.json()
    return path_from_root
  } catch (error) {}
}

module.exports = {
  getSearchResults,
}
