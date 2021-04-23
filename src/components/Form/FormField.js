import * as React from "react"
import "../../css/style.css"
import iconSet from "../../images/sprite.json"
import IcomoonReact from "icomoon-react"

const FormField = props => {
  return (
    <div className={`form__field ${props.half ? 'form__field--half' : ''}`}>
        <label className="form__field-label">{props.label}</label>
        <div className="form__field-input-container">
            <IcomoonReact className="form__field-icon" iconSet={iconSet} icon={props.icon} />
            <input className="form__field-input" type={props.type} required />
        </div>
    </div>
  )
}

export default FormField
