import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from '../shared/Breadcrumb'
import ProductCard from '../shared/ProductCard'

export const ResultSearchScreen = () => {
  /**
   * Este hook devuelve el objeto de ubicación actual,
   * y se utiliza en este caso para hacer la petición /items?search=
   * https://reactrouter.com/docs/en/v6/hooks/use-location
   */
  const { search } = useLocation()
  const [products, setProducts] = useState([])
  const [breadCrumb, setBreadCrumb] = useState([])

  /** para obtener los productos se hace uso del hook useEffect()
   * y se ejecuta una función fetch para consultar la API de ML
   */
  useEffect(() => {
    fetch(search)
      .then((response) => response.json())
      .then((data) => {
        /** un pequeño "filtro" para traer los primeros 4 productos */
        const getItems = data.items.filter((item, index) => index <= 3 ?? item)
        /** guardar las categorias obtenidas para crear el breadcrumb */
        setBreadCrumb(data.categories)
        /** guardar los productos obtenidos */
        setProducts(getItems)
      })
      .catch((error) => {
        console.log('errors', error)
        setProducts([])
      })
  }, [search])

  return (
    <>
      <Breadcrumb breadItems={breadCrumb} />

      <div className="whiteBox">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <section className="no-results">Cargando....</section>
        )}
      </div>
    </>
  )
}
