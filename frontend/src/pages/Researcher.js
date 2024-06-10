import React, { useEffect, useState } from 'react'
import '../main.css'
import axios from 'axios'

const Researcher = () => {

    const [researcher, setReseacher] = useState([])
    const [newResearcher, setNewResearcher] = useState({
        First_Name: "",
        Last_Name: "",
        Email_Address: "",
      })

    useEffect(() => {
        fetchResearcher()
    })

    const fetchResearcher = () => {
        axios.get('http://127.0.0.1:8000/api/researcher/')
        .then(response => {
          setReseacher(response.data)
        })
        .catch(error => console.error(error))
    }

    const handleInputChange = (e) => {
        setNewResearcher({...newResearcher, [e.target.name]:e.target.value})
    }

    const handleAddEvent = () => {
        axios.post('http://127.0.0.1:8000/api/researcher/', newResearcher)
    
        .then(response => {
          setReseacher([...researcher, response.data])
          setNewResearcher({
            First_Name: "",
            Last_Name: "",
            Email_Address: "",                                          
          })
          alert('Student Added Successfuly');
        })
        .catch(error => console.error(error))
    }

    const handleDeleteEvent = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/researcher/${id}/`, )
        .then(response => {
          fetchResearcher();
          setNewResearcher({
            First_Name: "",
            Last_Name: "",
            Email_Address: "",
          });
        })
        .catch(error => console.error(error))
    }

  return (
    <div className='app-container'>
      <h1>STUDENT</h1>
      <div className='form-container'>
        {/* <div className='form-inputs'>
          <input type='text' name='First_Name' placeholder='First Name' value={newResearcher.First_Name} onChange={handleInputChange}/>
          <input type='text' name='Last_Name' placeholder='Last Name' value={newResearcher.Last_Name} onChange={handleInputChange}/>
          <input type='text' name='Email_Address' placeholder='Email Address' value={newResearcher.Email_Address} onChange={handleInputChange}/>
          <div className='form-buttons'>
            <button onClick={handleAddEvent}>Add New Student</button>
          </div> */}
          <ul className='student-list'>
            {
            researcher.map(researcher => (
                <li key={researcher.id}>
                <div>
                    <strong>{researcher.First_Name} {researcher.Last_Name} | {researcher.Email_Address}</strong>
                </div>
                {/* <div className='actions'>
                    <button className='delete' onClick={() => handleDeleteEvent(researcher.id)}>Remove</button>
                </div> */}
                </li>
            ))
            }
          </ul>
        </div>
      </div>
    // </div>
  )
}

export default Researcher
