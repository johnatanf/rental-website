import * as React from "react"
import "../css/style.css"
import iconSet from "../images/sprite.json"
import IcomoonReact from "icomoon-react"

const Header = () => {
    
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__heading">Hotel Name</h1>
                <hr />
                <p className="header__description">Insert description here</p>
                <div className="header__socials">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <IcomoonReact className="header__socials-icon" iconSet={iconSet} icon="twitter" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <IcomoonReact className="header__socials-icon" iconSet={iconSet} icon="facebook2" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <IcomoonReact className="header__socials-icon" iconSet={iconSet} icon="instagram" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header