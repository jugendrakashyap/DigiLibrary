import { React, useState, useEffect } from 'react';
import '../../css/header.css'

function Header() {


    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const tokenavailable = window.localStorage.getItem('token')
        if (tokenavailable) {
            setIsLoggedIn(true)
        }

    }, [])
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

    function goToCollections() {
        window.location.href = '/collections';
    }

    return (
        <>
            <div className="top_header flex">
                <div className="logo_box flex" onClick={() => window.location.href = '/'}>
                    <div className="logo_img"></div>
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
                                        <img class='loginBtnImg' src="images/profile.png" alt="ico" />
                                        <p>Profile</p>
                                    </button>
                            :
                                    <button className="goto_Login" onClick={() => window.location.href = '/login'}>
                                        <img class='loginBtnImg' src="images/profile.png" alt="ico" />
                                        <p>Login</p>
                                    </button>
                    }
                    <div className="flex library_box" onClick={() => window.location.href = '/collections'}>
                        <div className="library_btn"></div>
                        <p>My Books</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
