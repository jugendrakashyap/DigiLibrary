import React, { useState } from 'react'
import axios from 'axios';

import './login.css'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameStatus, setNameStatus] = useState('');
    const [emailStatus, setEmailStatus] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const [confirmPasswordStatus, setConfirmPasswordStatus] = useState('');

    const [message, setMessage] = useState('');


    const handlePostRequest = (event) => {
        event.preventDefault();

        setNameStatus(name === '' ? 'Name is required' : '');
        setEmailStatus(email === '' ? 'Email is required' : '');
        setPasswordStatus(password === '' ? 'Password is required' : '');
        setConfirmPasswordStatus(confirmPassword === '' ? 'Confirm Password is required' : '');

        if (!name || !email || !password || !confirmPassword) return;
        if (!(password === confirmPassword)) {
            setMessage('Passwords do not match');
            return;
        }

        axios.post('http://localhost:8000/register', {
            name: name,
            email: email,
            phone: phone,
            password: password,
            confirmPassword: confirmPassword,
        })
            .then((res) => {
                setMessage(res.data.message);
                console.log('Response: ' + res.data.message);

                if (res.data.registration) {
                    document.getElementById('signupForm').reset();
                    document.getElementById('message').style.color = 'green';
                }
            })
            .catch((error) => {
                console.error('Error: ' + error);
            });
    }
    return (
        <div id='signup_form'>
            <form method='POST' id="signupForm">
                <h1>Register</h1>
                <input type="text" name="name" className='input' id="name" onChange={(e) => setName(e.target.value)} placeholder="Fullname" />
                <p style={{ color: "red", fontSize: '15px' }}>{nameStatus}</p>

                <input type="email" name="email" className='input' id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <p style={{ color: "red", fontSize: '15px' }}>{emailStatus}</p>

                <input type="number" name="phone" className='input' id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />

                <input type="password" name="password" className='input' id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" />
                <p style={{ color: "red", fontSize: '15px' }}>{passwordStatus}</p>

                <input type="text" name="confirm_password" className='input' id="confirm_password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                <p style={{ color: "red", fontSize: '15px' }}>{confirmPasswordStatus}</p>

                <button id='signupBtn' type="submit" onClick={handlePostRequest}>Submit</button>
                <p style={{ color: "red", fontSize: '1rem' }} id='message'>{message}</p>
                <a href="/login"> Login</a>
            </form>
        </div>
    )
}

export default Signup