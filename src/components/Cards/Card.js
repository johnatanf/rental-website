import * as React from "react"
import "../../css/style.css"
import iconSet from "../../images/sprite.json"
import IcomoonReact, { iconList } from "icomoon-react"

const Card = props => {
  return (
    <div className="card">
        { props.icon ? <IcomoonReact className="card__icon" iconSet={iconSet} icon={props.icon} /> : null }
        { props.image === "hostel" 
            ? <div className="card__img card__img--hostel" /> 
            : props.image === "single"
            ? <div className="card__img card__img--single" /> 
            : props.image === "double"
            ? <div className="card__img card__img--double" /> 
            : null
        }
        <div className="card__text-content">
            <div>
                <h3 className="card__heading">{props.heading}</h3>
                <p className="card__description">{props.description}</p>
            </div>
            { props.url ? <a className="card__button" href={props.url}>View room</a> : null }
        </div>
    </div>
  )
}

export default Card
