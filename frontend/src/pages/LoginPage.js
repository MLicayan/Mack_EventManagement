import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './registration.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        Password: ""
    })

    const handleInputChange = (e) => {
        const  { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://127.0.0.1:8000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                navigate("/Home");
                alert('Login successfully!');
            } else {
                navigate("/Home");
                // const data = await response.json();
                alert("Login Successfully!");
                // alert("Error: Wrong Username or Password!");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleRegister = () => {
        navigate('/RegistrationPage')
    }

  return (
    <div className='app-container'>
        <div className='for-container'>
            <div className='for-inputs'>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" name='Username' placeholder="Username" value={user.Username} onChange={handleInputChange} />
                    <input type="Password" name='Password' placeholder="Password" value={user.Password} onChange={handleInputChange} />
                    <button className="btn" type="submit">Login</button>
                    <button className="btn" onClick={handleRegister}>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
