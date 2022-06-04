import logo from '../../assets/images/Logo_ML.png'
import searchIcon from '../../assets/images/ic_Search2x.png'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" className="image-contain" />
        </Link>
        <div className="finder">
          <input
            className="finder__input"
            type="text"
            placeholder="Nunca dejes de buscar"
          />
          <button className="finder__button">
            <img src={searchIcon} alt="search icon" className="image-contain" />
          </button>
        </div>
      </div>
    </header>
  )
}
