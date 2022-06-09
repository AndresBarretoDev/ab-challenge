import logo from '../../assets/images/Logo_ML.png'
import searchIcon from '../../assets/images/ic_Search2x.png'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const NavBar = () => {
  /** se importa el hook useNavigate para poder navegar a la lista de productos
   * https://reactrouter.com/docs/en/v6/hooks/use-navigate */
  const navigate = useNavigate()

  /** se importa un customhook llamado useForm para poder
   * manejar el formulario de búsqueda */
  const [formValues, handleInputChange, resetForm] = useForm({
    /** se define el valor inicial del formulario */
    search: '',
  })
  const { search } = formValues

  /** se define un método para manejar el evento onSubmit del formulario
   * y navegar a la lista de productos con el valor de la búsqueda */
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/items?search=${search}`)
    resetForm()
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" className="image-contain" />
        </Link>
        <form onSubmit={handleSearch} className="finder">
          <input
            className="finder__input"
            type="text"
            placeholder="Nunca dejes de buscar"
            name="search"
            autoComplete="off"
            value={search}
            onChange={handleInputChange}
          />
          <button type="submit" className="finder__button">
            <img src={searchIcon} alt="search icon" className="image-contain" />
          </button>
        </form>
      </div>
    </header>
  )
}
