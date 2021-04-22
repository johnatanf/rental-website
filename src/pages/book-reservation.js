import * as React from "react"
import "../css/style.css"
import Form from "../components/Form/Form"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Notification from "../components/Notification"

const BookReservationPage = () => {
  
    const [notification, setNotification] = React.useState(null);
  
    return (
    <>
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