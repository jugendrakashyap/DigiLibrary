import React from 'react'
import { useParams } from 'react-router-dom';

import '../../css/header.css'

function Header() {
    const { id } = useParams();

    function headerJs() {
        console.log(id);
        if(id) {
            document.getElementById('profile_text').textContent = 'Profile';
        }

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
            window.location.href = '/login';
        })

        document.getElementById('library_btn').addEventListener('click', () => {
            window.location.href = '/collections';
        })
    }
    // Add event listener to DOMContentLoaded to load the header JS when the page is fully loaded
    window.addEventListener('DOMContentLoaded', headerJs);

    return (
        <>
            <div className="top_header flex">
                <div className="logo_box flex" id='logo'>
                    <div className="logo_img"></div>
                    <h1><span>digi</span>Library</h1>
                </div>
                <div className="search_box" id="search_box">
                    <input className="search_bar" id="search_bar" type="text" placeholder="Search for a ebook" />
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
                    <div className="flex login_box" id='login_btn'>
                        <div className="login_btn"></div>
                        <p id='profile_text'>Login</p>
                    </div>
                    <div className="flex library_box" id='library_btn'>
                        <div className="library_btn"></div>
                        <p>My Books</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
