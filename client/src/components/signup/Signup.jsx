import React, {useState} from 'react'
import axios from 'axios';

import '../../css/login.css'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handlePostRequest = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/signup', {
            name: name,
            email: email,
            phone: phone,
            password: password
        })
            .then((res) => {
                document.getElementById('message').textContent = res.data;
                console.log('Response: ' + res.data);
                document.getElementById('signupForm').reset();
            })
            .catch((error) => {
                console.error('Error: ' + error);
            });
    }
    return (
        <div id='signup_form'>
            <form method='POST' id="signupForm">
                <h1>Register</h1>
                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Fullname" required />
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="number" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" />
                <input type="text" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />

                <p id='message'></p>
                <button type="submit" onClick={handlePostRequest}>Submit</button>
                <a href="/login">Go to Login</a>
            </form>
        </div>
    )
}

export default Signup