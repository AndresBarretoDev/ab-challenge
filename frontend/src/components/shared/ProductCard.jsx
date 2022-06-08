import React from 'react'
import PropTypes from 'prop-types'

import iconShipping from '../../assets/images/ic_shipping.png'
import { Link } from 'react-router-dom'
const ProductCard = ({ typeCard, buyButton, product }) => {
  const {
    id,
    title,
    condition,
    free_shipping,
    price,
    picture,
    city,
    description,
    sold_quantity,
  } = product
  return (
    <>
      <article
        className={`productCard ${typeCard ? 'productCard--' + typeCard : ''}`}
      >
        <div className="productCard__body">
          <div className="productCard__image">
            {/* TODO: componente imagen  */}
            <Link to={`/items/${id}`}>
              <img src={picture} alt="imagen" className="image-contain" />
            </Link>
          </div>
          <div className="productCard__info">
            <div className="productCard__content">
              <div className="productCard__button"> {buyButton}</div>
              <div className="productCard__price">
                <span>
                  {new Intl.NumberFormat(price.currency, {
                    maximumSignificantDigits: 6,
                    style: 'currency',
                    currency: price.currency,
                  }).format(price.amount)}
                </span>
                {free_shipping ? (
                  <p className="icon-shipping">
                    <img
                      src={iconShipping}
                      alt="icon free shipping"
                      className="image-contain"
                    />
                  </p>
                ) : null}
              </div>
              <h2 className="productCard__name">{title}</h2>
              <p className="productCard__status">
                {condition}
                {sold_quantity ? (
                  <span> - {sold_quantity} vendidos</span>
                ) : null}
              </p>
            </div>
            {city ?? <p className="productCard__location">{city}</p>}
          </div>
        </div>
        {description ? (
          <div className="productCard__description">
            <h3 className="productCard__description-title">
              Descripción del producto
            </h3>
            <p className="productCard__description-text">{description}</p>
          </div>
        ) : null}
      </article>
    </>
  )
}

ProductCard.propTypes = {
  typeCard: PropTypes.string,
  buyButton: PropTypes.element,
  // product: PropTypes.object.isRequired,
}

export default ProductCard
