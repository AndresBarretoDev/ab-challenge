import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  return (
    <button type="button" className={`btn${color ? '-' + color : ''}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Button
