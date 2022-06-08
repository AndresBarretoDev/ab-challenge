import React from 'react'
import PropTypes from 'prop-types'

export const Breadcrumb = ({ breadItems }) => {
  return (
    <div className="breadCrumb">
      {breadItems.length > 0
        ? breadItems.map((item, index) => (
            <div key={index} className="breadCrumb__item">
              <span>{item.name}</span>
            </div>
          ))
        : null}
    </div>
  )
}

Breadcrumb.propTypes = {
  breadItems: PropTypes.array.isRequired,
}
