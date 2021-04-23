import * as React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import Card from "../components/Cards/Card"
import CardContainer from "../components/Cards/CardContainer"

const Room = props => {
  return (
    <>
      <section className="section section--dark section-room-description">
        <h1 className="room__heading">{props.type}</h1>
        <div className="room__content-container">
          <img className="room__image" src={props.image} alt={`${props.type.toLowerCase()} room`} />
          <div className="room__paragraph-container">
            {props.children}
            <p className="room__price">{`Starting from $${props.price}/night`}</p>
          </div>
        </div>
      </section>

      <section className="section section--dark section-room-facilities">
        <h2 className="heading-secondary">Facilities</h2>
        <CardContainer>
          <Card 
            icon="snowflake-o"
            heading="air conditioning"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi."
          />
          <Card 
            icon="restaurant"
            heading="free breakfast"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis."
          />
          <Card 
            icon="automobile"
            heading="free parking"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at."
          />
          <Card 
            icon="wifi"
            heading="WiFi"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi."
          />
          <Card 
            icon="fingerprint"
            heading="fingerprint access"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis."
          />
          <Card 
            icon="display"
            heading="television"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis."
          />
        </CardContainer>

        <Link className="room__book-button" to={'/book-reservation'}>Book now</Link>
      </section>
    </>
  )
}

export default Room
