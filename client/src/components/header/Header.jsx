import { React } from 'react';
import { jwtDecode } from "jwt-decode";

import './header.css'

function Header() {
    let isLoggedIn = false;
    const token = localStorage.getItem("token");

    if (token) {
        isLoggedIn = true;
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        console.log("Current time:", currentTime);

        if (decoded.exp < currentTime) {
            console.log("Token expired, logging out...");
            localStorage.removeItem("token"); // Clear expired token
            window.location.href = "/login";
        } else {
            console.log("Token is valid!");
        }
    } else {
        console.log("No token found, please log in.");
    }

    function showOptions() {
        const searchOpts = document.getElementById('search_options');
        searchOpts.style.display = 'block';

        const searchOption = document.getElementsByClassName('search_option');
        for (let i = 0; i < searchOption.length; i++) {
            searchOption[i].addEventListener('click', () => {
                window.location.href = '/search';
            })
        }

        const searchBar = document.getElementById('search_bar');
        document.addEventListener('click', (event) => {
            if (!searchBar.contains(event.target) && !searchOpts.contains(event.target)) {
                searchOpts.style.display = 'none';
            }
        })
    }
    return (
        <>
            <div className="top_header flex">
                <div className="logo_box flex" onClick={() => window.location.href = '/'}>
                    <img className="logo_img" src="images/logo.png" alt="logo" />
                    <h1><span>digi</span>Library</h1>
                </div>
                <div className="search_box" id="search_box">
                    <input className="search_bar" id="search_bar" type="text" placeholder="Search for a ebook" onFocus={showOptions} />
                    <div className="search_options" id="search_options">
                        <p className="search_option">Pride and Prejudice</p>
                        <p className="search_option">The Great Gatsby</p>
                        <p className="search_option">To Kill a Mockingbird</p>
                        <p className="search_option">Harry Potter series</p>
                        <p className="search_option">War and Peace</p>
                        <p className="search_option">To Kill a Mockingbird</p>
                        <p className="search_option">Harry Potter series</p>
                        <p className="search_option">War and Peace</p>
                    </div>
                </div>
                <div className="flex buttons">
                    {
                        isLoggedIn ? <button className="goto_Login" onClick={() => window.location.href = '/profile'}>
                            <img className='loginBtnImg' src="images/profile.png" alt="ico" />
                            <p>Profile</p>
                        </button>
                            :
                            <button className="goto_Login" onClick={() => window.location.href = '/login'}>
                                <img className='loginBtnImg' src="images/profile.png" alt="ico" />
                                <p>Login</p>
                            </button>
                    }
                    {
                        isLoggedIn ? <div className="flex library_box" onClick={() => window.location.href = '/collections'}>
                            <div className="library_btn"></div>
                            <p>My Books</p>
                        </div>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default Header;
