import logo from '../../assets/Logo_ML.png'
import searchIcon from '../../assets/ic_Search2x.png'

export const NavBar = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src={logo} alt="logo" className="image-contain" />
        </div>
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
