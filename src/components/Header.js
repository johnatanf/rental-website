import * as React from "react"
import "../css/style.css"
import iconSet from "../images/sprite.json"
import IcomoonReact, { iconList } from "icomoon-react"

console.log('icons: ' + iconList(iconSet))

const Header = () => {
    
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__heading">Hotel Name</h1>
                <hr />
                <p className="header__description">Insert description here</p>
                <div className="header__socials">
                    <a href="#">
                        <IcomoonReact className="header__socials-icon" iconSet={iconSet} icon="twitter" />
                    </a>
                    <a href="#">
                        <IcomoonReact className="header__socials-icon" iconSet={iconSet} icon="facebook2" />
                    </a>
                    <a href="#">
                        <IcomoonReact className="header__socials-icon" iconSet={iconSet} icon="instagram" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header