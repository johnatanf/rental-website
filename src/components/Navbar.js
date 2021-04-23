import * as React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import NavbarDropdown from "../components/NavbarDropdown"

const Navbar = () => {
  return (
    <nav className="navbar">
        <p className="navbar__logo">logo</p>
        <ul className="navbar__group">
            <Link to={'/'}>
                <li className="navbar__item">
                    Home
                </li>
            </Link>
            <li className="navbar__item navbar__item--non-link">
                Rooms
                <NavbarDropdown />
            </li>
            <Link to={'/book-reservation'}>
                <li className="navbar__item">
                    Book reservation
                </li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar
