import React, { useState } from 'react'
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

import '../../css/login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailStatus, setEmailStatus] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');

    const [message, setMessage] = useState('');

    const handlePostRequest = (event) => {
        event.preventDefault();

        setEmailStatus(email === '' ? 'Email is required' : '');
        setPasswordStatus(password === '' ? 'Password is required' : '');

        if (!email || !password) return;

        axios.post('http://localhost:8000/login', {
            email: email,
            password: password
        })
            .then((res) => {
                setMessage(res.data.message);

                localStorage.setItem("token", res.data.token);

                console.log('Response: ' + res.data.message);
                if (res.data.login) {
                    document.getElementById('loginForm').reset();
                    document.getElementById('message').style.color = 'green';
                    window.location.href = '/';
                }
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
                <p style={{ color: "red", fontSize: '15px' }}>{emailStatus}</p>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" required />
                <p style={{ color: "red", fontSize: '15px' }}>{passwordStatus}</p>

                <button id='loginBtn' type="submit" onClick={handlePostRequest}>Login</button>
                <p style={{ color: "red", fontSize: '1rem' }} id='message'>{message} <a href="/signup"> Register</a></p>
            </form>
        </div>
    )
}

export default Login