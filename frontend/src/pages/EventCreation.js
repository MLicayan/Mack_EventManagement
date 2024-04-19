import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../main.css'

const EventCreation = () => {
    const [events, setEvents] = useState([])
    const [newEvent, setNewEvent] = useState({
      EventTitle: "",
      Event_Date: "",
      Description: "",
      Address: "",
      Contact_Number: ""
    })

    const [selectedEvent, setSelectedEvent] = useState(null)
    const [toView, setToView] = useState({
      EventTitle: "",
      Event_Date: "",
      Description: "",
      Address: "",
      Contact_Number: ""
    })

    const [openView, setOpenview] = useState(false);

    useEffect(() => {
      fetchEvents()
    }, [])
    
    const fetchEvents = () => {
      axios.get('http://127.0.0.1:8000/api/events/')
      .then(response => {
        setEvents(response.data)
      })
      .catch(error => console.error(error))
    }

    const handleInputChange = (e) => {
      setNewEvent({...newEvent, [e.target.name]:e.target.value})
    }

    const handleAddEvent = () => {
      axios.post('http://127.0.0.1:8000/api/events/', newEvent)
      .then(response => {
        setEvents([...events, response.data])
        setNewEvent({
          EventTitle: "",
          Event_Date: "",
          Description: "",
          Address: "",
          Contact_Number: ""
        })
      })
      .catch(error => console.error(error))
    }

    const handleViewClick = async(id) => {
      const response = await axios.get(`http://127.0.0.1:8000/api/events/${id}/`)
      setToView(response.data)
      setOpenview(true)
    }

    const handleEditClick = (event) => {
      setSelectedEvent(event)
      setNewEvent(event)
    }

    const handleUpdateEvent = (id) => {
      axios.put(`http://127.0.0.1:8000/api/events/${selectedEvent.id}/`, newEvent)
      .then(response => {
        fetchEvents();
        setNewEvent({
          EventTitle: "",
          Event_Date: "",
          Description: "",
          Address: "",
          Contact_Number: ""
        });
      })
      .catch(error => console.error(error))
    }

    const handleCancelUpdateEvent = () => {
      setSelectedEvent(null)
      setNewEvent({
        EventTitle: "",
        Event_Date: "",
        Description: "",
        Address: "",
        Contact_Number: ""
      })
    }

    const handleDeleteEvent = (id) => {
      axios.delete(`http://127.0.0.1:8000/api/events/${id}/`, )
      .then(response => {
        fetchEvents();
        setNewEvent({
          EventTitle: "",
          Event_Date: "",
          Description: "",
          Address: "",
          Contact_Number: ""
        });
      })
      .catch(error => console.error(error))
    } 
  return (
    <div className='app-container'>
        <h1>Event Planning Management System</h1>
        {/* Form Container */}
          <div className='form-container'>
            <div className='form-inputs'>
            <input type='text' name='EventTitle' placeholder='Event Title' value={newEvent.EventTitle} onChange={handleInputChange} />
            <input type='date' name='Event_Date' placeholder='Event Date' value={newEvent.Event_Date} onChange={handleInputChange} />
            <textarea name='Description' placeholder='Description' value={newEvent.Description} onChange={handleInputChange} />
            <textarea name='Address' placeholder='Address' value={newEvent.Address} onChange={handleInputChange}/>
            <input type='text' name='Contact_Number' placeholder='Contact Number' value={newEvent.Contact_Number} onChange={handleInputChange} />
            
            <div className='form-buttons'>
                {
                selectedEvent ? (
                    <>
                    <button onClick={handleUpdateEvent}>Update</button>
                    <button onClick={handleCancelUpdateEvent}>Cancel</button>
                    </>
                ) : (
                    <button onClick={handleAddEvent}>Add New Event</button>
                )
                }
            </div>

            
            
            </div>
        </div>
            
        {/* Student List */}
        <ul className='student-list'>
            {
            events.map(event => (
                <li key={event.id}>
                <div>
                    <strong>{event.EventTitle} {event.Event_Date}</strong>
                </div>
                <div className='actions'>
                    <button className='view' onClick={() => handleViewClick(event.id)}>View</button>
                    <button className='edit' onClick={() => handleEditClick(event)}>Edit</button>
                    <button className='delete' onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </div>
                </li>
            ))
            }
        </ul>

        {/* Single View */}
        {openView && (
            <>
            <div className='outer-box'>
            <strong>{toView.EventTitle}</strong>
            <br />
            <span>Date : {toView.Event_Date}</span>
            <br />
            <span>Description : {toView.Description}</span>
            <br />
            <span>Address : {toView.Address}</span>
            <br />
            <span>Contact Line : {toView.Contact_Number}</span>
            <br />
            </div>
            <button onClick={() => setOpenview(false)}>Close</button>
            </>
        )}
      
    </div>
  )
}

export default EventCreation;