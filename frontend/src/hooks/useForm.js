import { useState } from 'react'

/** Hook que se encarga de manejar el valor del input del formulario */

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  /** Limpiar el input */
  const resetForm = () => {
    setValues(initialState)
  }
  /** Manejar el evento onChange del input y su respectivo valor */
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleInputChange, resetForm]
}
