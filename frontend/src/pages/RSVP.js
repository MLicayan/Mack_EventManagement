import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../main.css'

export const RSVP = () => {

  const [guest, setGuests] = useState([])
  const [newGuest, setNewGuest] = useState({
    GuestName: "",
    Email: "",
    Address: "",
    Contact_Number: "",
  })

  useEffect(() => {
    fetchGuest()
  }, [])

  const fetchGuest = () => {
    axios.get('http://127.0.0.1:8000/api/guest/')
    .then(response => {
      setGuests(response.data)
    })
    .catch(error => console.error(error))
  }

  const handleInputChange = (e) => {
    setNewGuest({...newGuest, [e.target.name]:e.target.value})
  }

  const handleAddEvent = () => {
    axios.post('http://127.0.0.1:8000/api/guest/', newGuest)
    .then(response => {
      setGuests([...guest, response.data])
      setNewGuest({
        GuestName: "",
        Email: "",
        Address: "",
        Contact_Number: "",
      })
    })
    .catch(error => console.error(error))
  }

  return (
    <div className='app-container'>
      <h1>RSVP</h1>
      <div className='form-container'>
        <div className='form-inputs'>
          <input type='text' name='Guest' placeholder='Guest Name' value={newGuest.GuestName} onChange={handleInputChange}/>
          <input type='text' name='Email' placeholder='Email' value={newGuest.Email} onChange={handleInputChange}/>
          <textarea name='Address' placeholder='Address' value={newGuest.Address} onChange={handleInputChange}/>
          <input type='text' name='Contact_Number' placeholder='Contact Number' value={newGuest.Contact_Number} onChange={handleInputChange}/>
          <div className='form-buttons'>
            <button onClick={handleAddEvent}>Add New Event</button>
          </div>
          <p>Michael Licayan</p>
          <p>Cagayan De Oro City</p>
          <p>Licayan.macky@gmail.com</p>
          <p>09265580665</p>
          <p>April 17, 2024</p>
          <br/>
          <p>Dear [Guest's Name],</p>
          <p>I hope this letter finds you in good spirits. 
            I am excited to extend a heartfelt invitation to you for 
            a special event that I am hosting.</p>
          <p>[Event Detail]</p>
          <p>Date: May 11, 2024</p>
          <p>Time: 3:00pm</p>
          <p>Location: New Convention Center, Marco Hotel</p>
          <p>
          RSVP: Please RSVP by April 30, 2024 to 
          Michael Licayan Contact# 09265580665
          </p>
          <p>
          Your presence would truly make the occasion memorable, 
          and I would be honored if you could join me for this celebration.
          </p>
          <p>
            Warm regards,
          </p>
          <p>
          Michael Licayan
          </p>
        </div>
        <div className='Image'>
        <img src='https://placehold.co/360x600?text=Image' alt='Guest Image'/>
        </div>
      </div>
    </div>
  )
}
