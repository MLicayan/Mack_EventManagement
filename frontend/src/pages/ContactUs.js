import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./contact.css";

const ContactUs = () => {

  const navigate = useNavigate();

  const [contact, setContact] = useState([])
  const [newContact, setNewContact] = useState({
    FirstName: "",
    LastName: "",
    content: "",
  })

  useEffect(() => {
    fetchContact()
  }, [])

  const fetchContact = () => {
    axios.get('http://127.0.0.1:8000/api/contactform/')
    .then(response => {
      setContact(response.data)
    })
    .catch(error => console.error(error))
  }

    const handleInputChange = (e) => {
      setNewContact({...newContact, [e.target.name]:e.target.value})
    }

    const handleAddEvent = () => {
      navigate("/Home");
        alert('Your Ticket is being uploaded!');
      axios.post('http://127.0.0.1:8000/api/contactform/', newContact)
      .then(response => {
        setContact([...contact, response.data])
        setNewContact({
          FirstName: "",
          LastName: "",
          content: "",
        })
      })
      .catch(error => console.error(error))
    }

  return (
    <div className='content'>
        <div class="container">
        <h3>Contact Form</h3>
        <form>
            <label>First Name</label>
            <input type="text" id="fname" name="FirstName" value={newContact.FirstName} placeholder="Your name.." onChange={handleInputChange}/>

            <label>Last Name</label>
            <input type="text" id="lname" name="LastName" value={newContact.LastName} placeholder="Your last name.." onChange={handleInputChange}/>

            <label>Subject</label>
            <textarea id="subject" name="content" value={newContact.content} placeholder="Write something.." onChange={handleInputChange}/>
            <input type="submit" onClick={handleAddEvent}/>
        </form>
        </div>
    </div>
  )
}

export default ContactUs
