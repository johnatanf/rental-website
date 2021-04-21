import * as React from "react"
import "../../css/style.css"
import iconSet from "../../images/sprite.json"
import IcomoonReact, { iconList } from "icomoon-react"

const Card = props => {
  return (
    <div className="card">
        <div>
            <IcomoonReact className="card__icon" iconSet={iconSet} icon="home" />
            <h3 className="card__heading">{props.heading}</h3>
            <p className="card__description">{props.description}</p>
        </div>
        { props.url ? <a className="card__button" href={props.url}>View room</a> : null }
    </div>
  )
}

export default Card
