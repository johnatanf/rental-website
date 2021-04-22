import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../css/style.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const BookReservationPage = ({ data }) => {
  
    return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ `${data.site.siteMetadata.title} | Hostel` }</title>
      </Helmet>
      <Navbar />
      <main className="main">
        
      </main>
      <Footer />
    </>
  )
}

export default BookReservationPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`