import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../css/style.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Room from "../templates/room"
import hostelImage from "../images/hostel.jpg"

const Hostel = ({ data }) => {
  
    return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ `${data.site.siteMetadata.title} | Hostel` }</title>
      </Helmet>
      <Navbar />
      <main className="main">
        <Room 
          type="Hostel"
          price="15"
          image={hostelImage}
        >
          <p className="paragraph">Aliquam rhoncus dui sed nisl dictum, id euismod tellus tristique. Nulla ut lacus nec neque feugiat pulvinar. Vivamus sed metus in velit efficitur faucibus et convallis libero. Suspendisse efficitur nulla non feugiat vestibulum. In quis tristique leo. Curabitur et condimentum elit, ac varius lorem. Ut condimentum, mi eu dapibus interdum, augue est pellentesque lorem, vitae egestas neque ligula ac sapien.</p>
          <p className="paragraph">Ut rutrum tincidunt eros quis rutrum. Sed consectetur, justo quis suscipit pulvinar, nisl mi tempus orci, et consectetur magna sem ac nisi. Cras ultricies condimentum tortor, ut porttitor eros congue at.</p>
        </Room>
      </main>
      <Footer />
    </>
  )
}

export default Hostel

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`