import React, { useState } from 'react'
import axios from 'axios';

function Header() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handlePostRequest = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/', {
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

    function headerJs() {
        const searchBar = document.getElementById('search_bar');
        const searchOptions = document.getElementById('search_options');
        const searchOption = document.getElementsByClassName('search_option');

        searchBar.addEventListener('focus', () => {
            searchOptions.style.display = 'block';
        })

        for (let i = 0; i < searchOption.length; i++) {
            searchOption[i].addEventListener('click', () => {
                window.location.href = '/search';
            })
        }

        document.addEventListener('click', (event) => {
            if (!searchBar.contains(event.target) && !searchOptions.contains(event.target)) {
                searchOptions.style.display = 'none';
            }
        })

        document.getElementById('logo').addEventListener('click', () => {
            window.location.href = '/';
        })

        document.getElementById('login_btn').addEventListener('click', () => {
            document.getElementById('login_form').style.display = 'block';
        })

        document.getElementById('signup_btn').addEventListener('click', () => {
            document.getElementById('login_form').style.display = 'none';
            document.getElementById('signup_form').style.display = 'block';
        })

        document.getElementById('gotoLogin').addEventListener('click', () => {
            document.getElementById('login_form').style.display = 'block';
            document.getElementById('signup_form').style.display = 'none';
        })

        document.getElementById('close_login_form').addEventListener('click', () => {
            document.getElementById('login_form').style.display = 'none';
        })

        document.getElementById('close_signup_form').addEventListener('click', () => {
            document.getElementById('signup_form').style.display = 'none';
        })
    }
    // Add event listener to DOMContentLoaded to load the header JS when the page is fully loaded
    window.addEventListener('DOMContentLoaded', headerJs);

    return (
        <>
            <div class="top_header flex">
                <div class="logo_box flex" id='logo'>
                    <div class="logo_img"></div>
                    <h1><span>digi</span>Library</h1>
                </div>
                <div class="search_box" id="search_box">
                    <input class="search_bar" id="search_bar" type="text" placeholder="Search for a ebook" />
                    <div class="search_options" id="search_options">
                        <p class="search_option">Pride and Prejudice</p>
                        <p class="search_option">The Great Gatsby</p>
                        <p class="search_option">To Kill a Mockingbird</p>
                        <p class="search_option">Harry Potter series</p>
                        <p class="search_option">War and Peace</p>
                        <p class="search_option">To Kill a Mockingbird</p>
                        <p class="search_option">Harry Potter series</p>
                        <p class="search_option">War and Peace</p>
                    </div>
                </div>
                <div class="flex buttons">
                    <div class="flex login_box" id='login_btn'>
                        <div class="login_btn"></div>
                        <p>Login</p>
                    </div>
                    <div class="flex library_box">
                        <div class="library_btn"></div>
                        <p>My Books</p>
                    </div>
                </div>
            </div>

            <div id='login_form'>
                <form method='POST'>
                    <div id='close_login_form'></div>
                    <h1>Login</h1>

                    <label for="username">Username</label>
                    <input type="text" name="email" id='username' placeholder="Enter Your Email or phone" required />

                    <label for="password">Password</label>
                    <input type="password" name="password" id="login_password" placeholder="Enter Your Password" required />

                    <button type="submit">Login</button>
                    <p id='signup_btn'>Create Account</p>
                </form>
            </div>

            <div id='signup_form'>
                <form method='POST' id="signupForm">
                    <div id='close_signup_form'></div>
                    <h1>Register</h1>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Fullname" required />
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="number" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" />
                    <input type="text" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />

                    <p id='message'></p>
                    <button type="submit" onClick={handlePostRequest}>Submit</button>
                    <p id='gotoLogin'>Go To Login</p>
                </form>
            </div>
        </>
    )
}

export default Header;
