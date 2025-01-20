import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../../css/login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePostRequest = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/login', {
            email: email,
            password: password
        })
            .then((res) => {
                const id = res.data;
                console.log(id);
                console.log('Response: ' + res.data);
                document.getElementById('loginForm').reset();
            })
            .catch((error) => {
                console.error('Error: ' + error);
            });
    }
    return (
        <div id='login_form'>
            <form method='POST' id='loginForm'>
                <h1>Login</h1>

                <label htmlFor="username">Username</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" required />

                <button id='loginBtn' type="submit" onClick={handlePostRequest}>Login</button>
                <a href="/signup">Create account</a>
            </form>
        </div>
    )
}

export default Login