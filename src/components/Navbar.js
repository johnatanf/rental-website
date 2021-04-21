import * as React from "react"
import "../css/style.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <p className="navbar__logo">logo</p>
        <ul className="navbar__group">
            <li className="navbar__item">
                <a href="#">
                    Home
                </a>
            </li>
            <li className="navbar__item">
                <a href="#">
                    Rooms
                </a>
            </li>
            <li className="navbar__item">
                <a href="#">
                    Book reservation
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
