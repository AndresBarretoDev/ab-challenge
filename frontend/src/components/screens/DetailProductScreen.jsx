import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../shared/Button'
import ProductCard from '../shared/ProductCard'

export const DetailProductScreen = () => {
  /** El hook useParams devuelve un objeto de pares clave/valor
   * de los parámetros dinámicos de la URL actual.
   * en este caso obtengo el id del producto */
  const params = useParams()
  const { id } = params

  const [detailProduct, setDetailProduct] = useState({})
  /** uso de un stado loading para manejar la carga asincrona del producto */
  const [loading, setLoading] = useState(true)

  /** Se realiza la petición con el uso de useEffect y manejo de async/await
   * para reducir un poco el código en comparación del ejemplo anterior en la pagina ResultSearchScreen */

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
