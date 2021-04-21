import * as React from "react"
import "../css/style.css"
import Form from "../components/Form/Form"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const BookReservationPage = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <section className="section section--dark section-book-reservation">
          <h2 className="heading-secondary u-margin-bottom-small">Book reservation</h2>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BookReservationPage