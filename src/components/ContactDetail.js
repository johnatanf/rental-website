import * as React from "react"
import "../css/style.css"
import iconSet from "../images/sprite.json"
import IcomoonReact, { iconList } from "icomoon-react"

const ContactDetail = props => {
  return (
    <div class="contact-detail">
        <IcomoonReact className="contact-detail__icon" iconSet={iconSet} icon={props.icon} />
        <span class="contact-detail__information">{props.information}</span>
    </div>
  )
}

export default ContactDetail