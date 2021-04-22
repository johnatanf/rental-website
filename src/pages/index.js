import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../css/style.css"
import Card from "../components/Cards/Card"
import CardContainer from "../components/Cards/CardContainer"
import ContactDetail from "../components/ContactDetail"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Map from "../components/Map"
import Navbar from "../components/Navbar"
import whoWeAreImage from "../images/who-we-are-side.jpg"

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ data.site.siteMetadata.title }</title>
      </Helmet>
      <Navbar />
      <Header />
      <main className="main">
        <section className="section section--dark section-who-we-are">
          <h2 className="heading-secondary u-margin-bottom-small">Who we are</h2>
          <div className="section-who-we-are__content-container">
            <div className="section-who-we-are__paragraph-container">
              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum, massa nec pharetra bibendum, arcu nisl condimentum nibh, tincidunt lobortis velit turpis et odio. Integer tincidunt ligula tellus, eu laoreet enim hendrerit sit amet. Aenean elementum massa non cursus posuere. Aliquam et pellentesque magna. Nunc et nulla eget eros lobortis faucibus. Etiam elementum nisi sed nunc venenatis dictum. Nulla facilisi. Sed et dui at leo laoreet feugiat sed ac justo.</p>
              <p className="paragraph">Aenean a tellus ultrices, accumsan libero sit amet, elementum odio. Fusce dignissim diam mi, nec faucibus diam eleifend vitae. Aliquam vitae sagittis nunc. Maecenas id est vel neque convallis vehicula.</p>
            </div>
            <img className="section-who-we-are__image" src={whoWeAreImage} alt="hotel picture" />
          </div>
        </section>

        <section className="section section--dark section-available-rooms">
          <h2 className="heading-secondary u-margin-bottom-small">Available rooms</h2>
          <CardContainer>
            <Card 
              image="hostel"
              url="#" 
              heading="hostel"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet."
            />
            <Card 
              image="single"
              url="#"
              heading="single room"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card 
              image="double"
              url="#"
              heading="double room"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </CardContainer>
        </section>

        <section className="section section--dark section-find-us">
          <h2 className="heading-secondary u-margin-bottom-small">Find us</h2>
          <div className="section-find-us__content">
            <Map />
            <div className="section-find-us__details">
              <ContactDetail icon="location" information="Ubud, Bali" />
              <ContactDetail icon="phone" information="(555) 5555 555" />
              <ContactDetail icon="mail4" information="fakeemail@fakehotel.com" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`