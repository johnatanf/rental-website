import * as React from "react"
import "../css/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import whoWeAreImage from "../images/who-we-are-side.jpg";

const IndexPage = () => {
  return (
    <>
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
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
