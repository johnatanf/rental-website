import * as React from "react"
import { Link } from "gatsby"
import "../css/style.css"

const NavbarDropdown = () => {
  return (
    <div className="navbar__dropdown">
        <Link className="navbar__dropdown-item" to={'/hostel'}>Hostel</Link>
        <Link className="navbar__dropdown-item" to={'/single'}>Single room</Link>
        <Link className="navbar__dropdown-item" to={'/double'}>Double room</Link>
    </div>
  )
}

export default NavbarDropdown
