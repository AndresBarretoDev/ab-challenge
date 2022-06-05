const fetch = require('node-fetch')

const author = {
  name: 'Andrés',
  lastname: 'Barreto',
}

const getSearchResults = (req, res, next) => {
  const URL_API = `${process.env.URL_API}/sites/MLA/search?q=`

  const { search } = req.query
  const endpoint = `${URL_API}${search}`

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      const dataResponse = {
        ok: true,
        author,
        data,
      }
      res.json(dataResponse)
    })
    .catch((err) => {
      res.send(err)
    })
}

module.exports = {
  getSearchResults,
}
