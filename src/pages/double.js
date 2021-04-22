import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../css/style.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Room from "../templates/room"
import doubleImage from "../images/double.jpg"

const Double = ({ data }) => {
  
    return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ `${data.site.siteMetadata.title} | Double Room` }</title>
      </Helmet>
      <Navbar />
      <main className="main">
        <Room 
          type="Double"
          price="65"
          image={doubleImage}
        >
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, ligula at rutrum auctor, elit augue tincidunt risus, tempor dapibus mi elit eget neque. Suspendisse sed elit ut enim finibus facilisis. Duis id ullamcorper lectus, vitae bibendum ex. Donec ultricies dictum lacus et sagittis. Mauris ornare vulputate commodo. Sed suscipit ex quam, ut lacinia augue vehicula at. Donec et tellus nec felis congue feugiat. Phasellus efficitur leo id libero euismod placerat. Vestibulum ultrices, lectus vitae egestas vestibulum, augue erat ultrices elit, eget malesuada ligula risus at purus.</p>
          <p className="paragraph">Phasellus mauris orci, fringilla bibendum euismod vitae, vulputate sed mi. Phasellus consequat est eget auctor hendrerit. Maecenas in ligula sodales, maximus orci in, ultrices eros. Sed porttitor sodales metus, eu placerat massa sollicitudin consequat. Nam non purus at turpis pretium tempor. Cras quis viverra dui. Ut commodo nulla aliquet dui ultricies, vitae blandit ipsum ornare.</p>
        </Room>
      </main>
      <Footer />
    </>
  )
}

export default Double

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`