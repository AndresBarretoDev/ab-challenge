import React from 'react'
import PropTypes from 'prop-types'

export const Breadcrumb = ({ breadItems }) => {
  console.log('props', breadItems)
  return (
    <div className="breadCrumb">
      {breadItems.map((item, index) => (
        <div key={`${item.name}gfdfg`} className="breadCrumb__item">
          <span href="/">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

Breadcrumb.propTypes = {
  breadItems: PropTypes.array.isRequired,
}
