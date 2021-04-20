import * as React from "react"
import "../css/style.css"

const Header = () => {
    return (
        <header class="header">
            <div class="header__container">
                <h1 class="header__heading">Hotel Name</h1>
                <hr />
                <p class="header__description">Insert description here</p>
            </div>
        </header>
    )
}

export default Header