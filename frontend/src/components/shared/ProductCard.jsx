import React from 'react'
import PropTypes from 'prop-types'

import iconShipping from '../../assets/images/ic_shipping.png'
const ProductCard = ({ typeCard, buyButton }) => {
  return (
    <article
      className={`productCard ${typeCard ? 'productCard--' + typeCard : ''}`}
    >
      <div className="productCard__body">
        <div className="productCard__image">
          {/* TODO: componente imagen  */}
          <img
            src="https://picsum.photos/800/1000?random=1"
            alt="imagen"
            className="image-cover"
          />
        </div>
        <div className="productCard__info">
          <div className="productCard__content">
            <div className="productCard__button"> {buyButton}</div>
            <div className="productCard__price">
              <span> $ 1.980</span>
              <p className="icon-shipping">
                <img src={iconShipping} alt="pesos" className="image-contain" />
              </p>
            </div>
            <h2 className="productCard__name">
              apple ipod touch 5g 16gb negro igual a nuevo
            </h2>
            <p className="productCard__status">completo único!</p>
          </div>
          <p className="productCard__location">bogotá</p>
        </div>
      </div>
      <div className="productCard__description">
        <h3 className="productCard__description-title">
          Descripción del producto
        </h3>
        <p className="productCard__description-text">
          esta descripción llega en las props de la respuesta y se debe
          condicionar lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ea quis quos doloremque, quidem quisquam
        </p>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  typeCard: PropTypes.string,
  buyButton: PropTypes.element,
}

export default ProductCard
