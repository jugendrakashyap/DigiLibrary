import React, { useState, useEffect } from 'react'

import './search.css'

function Search() {
    const [img, setImg] = useState([]);
    const [title, setTitle] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [language, setLanguage] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const bookData = await fetch('https://digilibrary-w06n.onrender.com/search');
            const data = await bookData.json();

            setImg(data.map(book => book.img));
            setTitle(data.map(book => book.title));
            setPublisher(data.map(book => book.publisher));
            setLanguage(data.map(book => book.language));
            setGenre(data.map(book => book.genre));
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
                        <div className="item_box" onClick={() => window.location.href = "/book"}>
                            <img className="img" src={img[0]} alt='img' />

                            <div className="des_box">
                                <h2><span>Title: </span>{title[0]}</h2>
                                <p><span>Publisher: </span>{publisher[0]}</p>
                                <p><span>Language: </span>{language[0]}</p>
                                <p><span>Genre: </span>{genre[0]}</p>
                            </div>

                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn" onClick={() => { window.location.href = "/reader" }}>Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <h1><span>★★★★☆</span></h1>
                                    <big>(12345)</big>
                                </div>
                            </div>
                        </div>

                        <div className="item_box" onClick={() => window.location.href = "/book"}>
                        <img className="img" src={img[1]} alt='img' />

                            <div className="des_box">
                                <h2><span>Title: </span>{title[1]}</h2>
                                <p><span>Publisher: </span>{publisher[1]}</p>
                                <p><span>Language: </span>{language[1]}</p>
                                <p><span>Genre: </span>{genre[1]}</p>
                            </div>

                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn" onClick={() => { window.location.href = "/reader" }}>Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <h1><span>★★★★☆</span></h1>
                                    <big>(12345)</big>
                                </div>
                            </div>
                        </div>

                        <div className="item_box" onClick={() => window.location.href = "/book"}>
                        <img className="img" src={img[2]} alt='img' />

                            <div className="des_box">
                                <h2><span>Title: </span>{title[2]}</h2>
                                <p><span>Publisher: </span>{publisher[2]}</p>
                                <p><span>Language: </span>{language[2]}</p>
                                <p><span>Genre: </span>{genre[2]}</p>
                            </div>

                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn" onClick={() => { window.location.href = "/reader" }}>Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <h1><span>★★★★☆</span></h1>
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