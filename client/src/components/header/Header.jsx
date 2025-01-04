import React from 'react'

function Header() {
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
    }
    // Add event listener to DOMContentLoaded to load the header JS when the page is fully loaded
    window.addEventListener('DOMContentLoaded', headerJs);

    return (
        <header>
            <div class="top_header flex">
                <div class="logo_box flex">
                    <img class="logo_img" src="logo.png" alt="img" />
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
                    <div class="flex login_box">
                        <div class="login_btn"></div>
                        <p>Profile</p>
                    </div>
                    <div class="flex library_box">
                        <div class="library_btn"></div>
                        <p>My Books</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
