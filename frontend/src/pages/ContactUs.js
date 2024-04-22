import React from 'react'
import "./contact.css";

const ContactUs = () => {

    const HandleSubmit = (ev) => {
        alert("Your Ticket is being uploaded!")
    }

  return (
    <div className='content'>
        <div class="container">
        <h3>Contact Form</h3>
        <form>
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."/>
            <input type="submit" onChange={HandleSubmit} />
        </form>
        </div>
    </div>
  )
}

export default ContactUs
