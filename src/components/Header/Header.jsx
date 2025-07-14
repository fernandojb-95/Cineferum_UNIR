import { NavLink } from "react-router"
import { paths } from "../../constants/routes"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <section className="layout-content header__content">
      <h1 className="title">Cineférum</h1>
      <nav className="main-nav">
          <NavLink to={paths.HOME}>
            Inicio
          </NavLink>
          <NavLink to={paths.ABOUT}>
            Acerca de
          </NavLink>
          <NavLink to={paths.CART}>
            Carrito
          </NavLink>
      </nav>
      </section>
    </header>
  )
}

export default Header