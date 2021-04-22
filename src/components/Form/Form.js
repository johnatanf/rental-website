import * as React from "react"
import "../../css/style.css"
import FormField from "./FormField";

const Form = ({ setNotification }) => {

  const handleSubmit = event => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
    setNotification("Thank you, we'll send you a confirmation email soon! Note: Nothing has been submitted, this is just for demo purposes. Thanks for checking out my portfolio!")
    setTimeout(() => {
      setNotification(null)
    }, 10000)
  }

  return (
    <form class="form" action="#" onSubmit={handleSubmit} >
      <FormField 
        label="name"
        type="text"
        icon="user"
      />
      <FormField 
        label="phone number"
        type="text"
        icon="phone"
      />
      <FormField 
        label="email"
        type="email"
        icon="mail4"
      />
      <FormField 
        label="check-in"
        type="date"
        icon="calendar"
        half={true}
      />
      <FormField 
        label="check-out"
        type="date"
        icon="calendar"
        half={true}
      />
      <FormField 
        label="number of guests"
        type="number"
        icon="users"
        half={true}
      />
      <FormField 
        label="number of rooms"
        type="number"
        icon="home"
        half={true}
      />
      <FormField 
        label="room type"
        type="text"
        icon="home"
      />
      <button className="form__submit" type="submit">Book reservation</button>
    </form>
  )
}

export default Form
