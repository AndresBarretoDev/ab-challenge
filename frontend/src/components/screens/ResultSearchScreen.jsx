import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from '../shared/Breadcrumb'
import ProductCard from '../shared/ProductCard'

export const ResultSearchScreen = () => {
  const { search } = useLocation()
  const [products, setProducts] = useState([])
  const [breadCrumb, setBreadCrumb] = useState([])

  useEffect(() => {
    fetch(search)
      .then((response) => response.json())
      .then((data) => {
        const getItems = data.items.filter((item, index) => index <= 3 ?? item)
        setBreadCrumb(data.categories)
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
