import logo from '../../assets/images/Logo_ML.png'
import searchIcon from '../../assets/images/ic_Search2x.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
// import queryString from 'query-string'

export const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // const querySearch = queryString.parse(location.search)

  const [formValues, handleInputChange, resetForm] = useForm({
    search: '',
  })
  const { search } = formValues

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
