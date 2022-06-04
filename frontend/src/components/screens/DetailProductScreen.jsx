import Button from '../shared/Button'
import ProductCard from '../shared/ProductCard'

export const DetailProductScreen = () => {
  return (
    <div className="whiteBox">
      <ProductCard
        typeCard="detail"
        buyButton={<Button color="primary" text="comprar" />}
      />
    </div>
  )
}
