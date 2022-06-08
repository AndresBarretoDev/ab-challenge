import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../shared/Button'
import ProductCard from '../shared/ProductCard'

export const DetailProductScreen = () => {
  const params = useParams()

  const [detailProduct, setDetailProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = params

  useEffect(() => {
    const getDetailProduct = async () => {
      try {
        const response = await fetch(`/items/${id}`)
        const data = await response.json()
        if (data.ok) {
          setDetailProduct(data.item)
          setLoading(false)
        }
      } catch (error) {
        setDetailProduct({})
      }
    }
    getDetailProduct()
  }, [id])

  return (
    <div className="whiteBox">
      {loading ? (
        <section className="no-results">Cargando....</section>
      ) : (
        <ProductCard
          typeCard="detail"
          product={detailProduct}
          buyButton={<Button color="primary" text="Comprar" />}
        />
      )}
    </div>
  )
}
