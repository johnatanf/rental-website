import * as React from "react"
import "../../css/style.css"

const CardContainer = props => {
  return (
    <div className="card-container">
        {props.children}
    </div>
  )
}

export default CardContainer
