import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./registration.css";

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([])
    const [newUser, setNewUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        Password: ""
    })

    useEffect(() => {
        fetchUser()
      }, [])

    const fetchUser = () => {
        axios.get('http://127.0.0.1:8000/api/user/')
        .then(response => {
          setUser(response.data)
        })
        .catch(error => console.error(error))
      }

    const handleInputChange = (e) => {
        setNewUser({...newUser, [e.target.name]:e.target.value})
      }

    const handleAddEvent = () => {
        axios.post('http://127.0.0.1:8000/api/user/', newUser)
        .then(response => {
          setUser([...user, response.data])
          setNewUser({
            First_Name: "",
            Last_Name: "",
            Email: "",
            Username: "",
            Password: ""
          })
        })
        .catch(error => console.error(error))
        navigate('/')
        alert('Register successfully!');
        // alert('Please fill in blank fields!');
    }


  return (
    <div className='app-container'>
        <div className='for-container'>
            <div className='for-inputs'>
                <h2>Register</h2>
                <form onSubmit={handleAddEvent}>
                    <input type="text" name='First_Name' placeholder="First Name" value={newUser.First_Name} onChange={handleInputChange} />
                    <input type="text" name='Last_Name' placeholder="Last Name" value={newUser.Last_Name} onChange={handleInputChange} />
                    <input type="email" name='Email' placeholder="Email" value={newUser.Email} onChange={handleInputChange} />
                    <input type="text" name='Username' placeholder="Username" value={newUser.Username} onChange={handleInputChange} />
                    <input type="Password" name='Password' placeholder="Password" value={newUser.Password} onChange={handleInputChange} />
                    <button className="btn" type="submit">Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegistrationPage
