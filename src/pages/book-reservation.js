import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../css/style.css"
import Form from "../components/Form/Form"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Notification from "../components/Notification"

const BookReservationPage = ({ data }) => {
  
    const [notification, setNotification] = React.useState(null);
  
    return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ `${data.site.siteMetadata.title} | Book Reservation` }</title>
      </Helmet>
      <Navbar />
      <main className="main">
        <section className="section section--dark section-book-reservation">
          <h2 className="heading-secondary u-margin-bottom-small">Book reservation</h2>
          <Notification notification={notification} />
          <Form setNotification={setNotification}/>
        </section>
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