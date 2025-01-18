import React from 'react'

import '../../css/search.css'

function Search() {
    React.useEffect(() => {
        const fetchData = async () => {
            const bookData = await fetch('http://localhost:8000/search');
            const data = await bookData.json();
            console.log(data);

            function listBooks() {
                const title = document.getElementsByClassName('title');
                const subtitle = document.getElementsByClassName('subtitle');
                const publisher = document.getElementsByClassName('publisher');
                const language = document.getElementsByClassName('language');
                const genre = document.getElementsByClassName('genre');
                console.log(data[0].title);

                for (let i = 0; i < 1; i++) {
                    title[i].textContent = data[i].title;
                    console.log(data[i].title);
                    subtitle[i].textContent = data[i].subtitle;
                    publisher[i].textContent = data[i].publisher;
                    language[i].textContent = data[i].language;
                    genre[i].textContent = data[i].genre;
                }

                document.getElementById('item_box').addEventListener('click', () => {
                    window.location.href = '/book';
                })
            }
            // Add event listener to DOMContentLoaded to load the header JS when the page is fully loaded
            window.addEventListener('DOMContentLoaded', listBooks());
        }
        fetchData();
    })

    return (
        <>
            <main>
                <div className="search_sections">
                    <section className="side_bar">
                        <ul className="">
                            <li className="main_list">
                                <div className="category">
                                    <p>ABOUT US</p>
                                    <div className="drop_icon"></div>
                                </div>
                                <ul className="types">
                                    <li className="type">Overview</li>
                                    <li className="type">Company Vision</li>
                                    <li className="type">Achievements</li>
                                    <li className="type">Careers</li>
                                    <li className="type">Contact Us</li>
                                </ul>
                            </li>
                            <li className="main_list">
                                <div className="category">
                                    <p>SCIENCE</p>
                                    <div className="drop_icon"></div>
                                </div>
                                <ul className="">
                                    <li className="type">Overview</li>
                                    <li className="type">Company Vision</li>
                                    <li className="type">Achievements</li>
                                    <li className="type">Careers</li>
                                    <li className="type">Contact Us</li>
                                </ul>
                            </li>
                            <li className="main_list">
                                <div className="category">
                                    <p>PSHYCOLOGY</p>
                                    <div className="drop_icon"></div>
                                </div>
                                <ul className="">
                                    <li className="type">Overview</li>
                                    <li className="type">Company Vision</li>
                                    <li className="type">Achievements</li>
                                    <li className="type">Careers</li>
                                    <li className="type">Contact Us</li>
                                </ul>
                            </li>
                            <li className="main_list">
                                <div className="category">
                                    <p>BOIGRAPHY</p>
                                    <div className="drop_icon"></div>
                                </div>
                                <ul className="">
                                    <li className="type">Overview</li>
                                    <li className="type">Finacial Reports</li>
                                    <li className="type">Investor Information</li>
                                    <li className="type">Investor Communication</li>
                                    <li className="type">SEBI Discloser</li>
                                </ul>
                            </li>
                            <li className="main_list">
                                <div className="category">
                                    <p>NOVELS</p>
                                    <div className="drop_icon"></div>
                                </div>
                                <ul className="">
                                    <li className="type">ESG Profile</li>
                                    <li className="type">Option2</li>
                                    <li className="type">Option3</li>
                                </ul>
                            </li>
                            <li className="main_list">
                                <div className="category">
                                    <p>STORIES</p>
                                    <div className="drop_icon"></div>
                                </div>
                                <ul className="">
                                    <li className="type">Press Release</li>
                                    <li className="type">News</li>
                                    <li className="type">Blog</li>
                                    <li className="type">Press Kit</li>
                                    <li className="type">Media Contact</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section className="listed_items">
                        <div className="item_box" id='item_box'>
                            <div className="item_sec item_sec_img1"></div>

                            <div className="item_sec2">
                                <div className='labels'>
                                    <h2 className='color_orange'>Title:</h2>
                                    <p className='color_orange'>Subtitle:</p>
                                    <h3 className='color_orange'>Publisher:</h3>
                                    <p className='color_orange'>Language:</p>
                                    <p className='color_orange'>Genre:</p>
                                </div>
                                <div className='details'>
                                    <h2 className='title'></h2>
                                    <p className='subtitle'></p>
                                    <h4 className='publisher'></h4>
                                    <p className='language'></p>
                                    <p className='genre'></p>
                                </div>
                            </div>

                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn" onClick={() => {window.location.href = "/reader"}}>Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <h1 className='color_orange'>★★★★☆</h1>
                                    <big>(12345)</big>
                                </div>
                            </div>
                        </div>

                        <div className="item_box">
                            <div className="item_sec item_sec_img2"></div>

                            <div className="item_sec2">
                                <div className='labels'>
                                    <h2 className='color_orange'>Title:</h2>
                                    <p className='color_orange'>Subtitle:</p>
                                    <h3 className='color_orange'>Publisher:</h3>
                                    <p className='color_orange'>Language:</p>
                                    <p className='color_orange'>Genre:</p>
                                </div>
                                <div className='details'>
                                    <h2 className='title'></h2>
                                    <p className='subtitle'></p>
                                    <h4 className='publisher'></h4>
                                    <p className='language'></p>
                                    <p className='genre'></p>
                                </div>
                            </div>

                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn" onClick={() => {window.location.href = "/reader"}}>Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <h1 className='color_orange'>★★★★☆</h1>
                                    <big>(12345)</big>
                                </div>
                            </div>
                        </div>

                        <div className="item_box">
                            <div className="item_sec item_sec_img3"></div>

                            <div className="item_sec2">
                                <div className='labels'>
                                    <h2 className='color_orange'>Title:</h2>
                                    <p className='color_orange'>Subtitle:</p>
                                    <h3 className='color_orange'>Publisher:</h3>
                                    <p className='color_orange'>Language:</p>
                                    <p className='color_orange'>Genre:</p>
                                </div>
                                <div className='details'>
                                    <h2 className='title'></h2>
                                    <p className='subtitle'></p>
                                    <h4 className='publisher'></h4>
                                    <p className='language'></p>
                                    <p className='genre'></p>
                                </div>
                            </div>

                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn" onClick={() => {window.location.href = "/reader"}}>Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <h1 className='color_orange'>★★★★☆</h1>
                                    <big>(12345)</big>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Search