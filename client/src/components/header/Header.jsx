import { React,useState,useEffect } from 'react';
import '../../css/header.css'

function Header() {


    const [isLoggedIn,setIsLoggedIn]=useState(false)
        useEffect(()=>{
            const tokenavailable=window.localStorage.getItem('token')
            if(tokenavailable){
                setIsLoggedIn(true)
            }
    
        },[])
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

    function goToHome() {
        window.location.href = '/';
    }

    function goToLogin() {
        window.location.href = '/login';
    }

    function goToCollections() {
        window.location.href = '/collections';
    }

    return (
        <>
            <div className="top_header flex">
                <div className="logo_box flex" onClick={goToHome}>
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
                    <div className="flex login_box" onClick={goToLogin}>
                        <div className="login_btn"></div>
{                        
    isLoggedIn?  <p id='profile_text'>Profile</p>
    :
    <p id='profile_text'>login</p>
}                    </div>
                    <div className="flex library_box" onClick={goToCollections}>
                        <div className="library_btn"></div>
                        <p>My Books</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
