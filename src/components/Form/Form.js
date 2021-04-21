import * as React from "react"
import "../../css/style.css"
import FormField from "./FormField";

const Form = () => {
  return (
    <form class="form">
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
      />
      <FormField 
        label="check-out"
        type="date"
        icon="calendar"
      />
      <FormField 
        label="number of guests"
        type="number"
        icon="users"
      />
      <FormField 
        label="number of rooms"
        type="number"
        icon="home"
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
