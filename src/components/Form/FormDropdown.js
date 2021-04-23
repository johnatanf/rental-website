import * as React from "react"
import "../../css/style.css"
import iconSet from "../../images/sprite.json"
import IcomoonReact from "icomoon-react"

const FormDropdown = props => {
  return (
    <div className={`form__field ${props.half ? 'form__field--half' : ''}`}>
        <label className="form__field-label">{props.label}</label>
        <div className="form__field-input-container">
            <IcomoonReact className="form__field-icon" iconSet={iconSet} icon={props.icon} />
            <select className="form__field-dropdown" name="room-type" id="room-type">
              <option className="form__field-dropdown-item" value="hostel">Hostel</option>
              <option className="form__field-dropdown-item" value="single">Single room</option>
              <option className="form__field-dropdown-item" value="double">Double room</option>
            </select>
        </div>
    </div>
  )
}

export default FormDropdown
