import * as React from "react"
import "../css/style.css"
import iconSet from "../images/sprite.json"
import IcomoonReact, { iconList } from "icomoon-react"

const Notification = props => {
    if (props.notification) {
        return (
            <div class="notification">
                <IcomoonReact className="notification__icon" iconSet={iconSet} icon="checkbox-checked" />
                <p className="notification__message">{props.notification}</p>
            </div>
        )
    } else {
        return null
    }
}

export default Notification
