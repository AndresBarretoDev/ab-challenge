const fetch = require('node-fetch')

const author = {
  name: 'Andrés',
  lastname: 'Barreto',
}

const getSearchResults = async (req, res, next) => {
  const URL_API = `${process.env.URL_API}/sites/MLA/search?q=`

  const { search } = req.query
  const endpoint = `${URL_API}${search}`

  await fetch(endpoint)
    .then((res) => res.json())
    .then(({ results }) => {
      const listCategoryId = results.map((item) => item.category_id)
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
        console.log('categorie', ...categories)
        const dataResponse = {
          ok: true,
          author,
          categories: categories[0],
          items: items,
        }
        res.json(dataResponse)
      })
      // const items = results.map((item) => {
      //   const {
      //     id,
      //     title,
      //     prices,
      //     condition,
      //     thumbnail: picture,
      //     shipping,
      //   } = item
      //   const itemData = {
      //     id,
      //     title,
      //     condition,
      //     picture,
      //     free_shipping: shipping.free_shipping,
      //     price: {
      //       id: prices.id,
      //       currency: prices.prices[0].currency_id,
      //       amount: prices.prices[0].amount,
      //       decimals: 0,
      //     },
      //   }
      //   return itemData
      // })
      // const dataResponse = {
      //   ok: true,
      //   author,
      //   items,
      //   categories: cats,
      // }
      // res.json(dataResponse)
    })
    .catch((err) => {
      res.send(err)
    })
}

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
const getBreadCrumb = async (catId) => {
  const apiCategories = `${process.env.URL_API}/categories/${catId}`

  try {
    const response = await fetch(apiCategories)
    const { path_from_root } = await response.json()
    // console.log('path_from_root', path_from_root)
    return path_from_root
  } catch (error) {}
}

module.exports = {
  getSearchResults,
}
