import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../css/style.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Room from "../templates/room"
import singleImage from "../images/single.jpg"

const Hostel = ({ data }) => {
  
    return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ `${data.site.siteMetadata.title} | Single Room` }</title>
      </Helmet>
      <Navbar />
      <main className="main">
        <Room 
          type="Single"
          price="45"
          image={singleImage}
        >
          <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam mi vitae diam consequat auctor. Praesent ultricies velit at velit condimentum facilisis. Fusce ultricies mi at cursus rutrum. Vivamus eget iaculis leo. Sed maximus viverra orci, id egestas ipsum aliquet in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor justo enim, nec laoreet metus efficitur sit amet. Maecenas a varius lorem. Ut sed porttitor tortor. Sed nec metus dui.</p>
          <p className="paragraph">Donec eget rutrum diam. Aliquam justo tellus, aliquam nec ultricies in, fringilla et nibh. Suspendisse interdum mattis tortor, a commodo nisl. Maecenas rhoncus posuere tortor, eu auctor dui consectetur sit amet. Quisque facilisis aliquet justo quis consectetur. Etiam sit amet aliquam sem. Nullam luctus elementum mauris, eu laoreet lectus. Quisque congue augue ac porttitor consequat. In at mi sem. Curabitur tincidunt ullamcorper egestas.</p>
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