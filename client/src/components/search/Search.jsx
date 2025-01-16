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
                            <div className="item_sec">
                                <img className="book_img"
                                    src="https://marketplace.canva.com/EAFzmEHEJPw/2/0/1024w/canva-neutral-minimalist-aesthetic-time-management-ebook-cover-PSoR42xOBIE.jpg"
                                    alt="img" />
                            </div>
                            <div className="item_sec2">
                                <h2><span>Title:</span> The Whispering City</h2>
                                <p><span>Author:</span> F. Scott Fitzgerald</p>
                                <p>Paperback, 9780743273565</p>
                                <p><span>Description:</span>
                                    In the heart of New York, journalist Anna Carter lives for the thrill of the next big story. But
                                    when an anonymous letter lands on her desk, her life takes a dangerous turn.
                                </p>
                                <a href="/book">details</a>
                            </div>
                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn">Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <span>★★★★☆</span>
                                    <span>(12345)</span>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_sec">
                                <img className="book_img"
                                    src="https://marketplace.canva.com/EAFzmEHEJPw/2/0/1024w/canva-neutral-minimalist-aesthetic-time-management-ebook-cover-PSoR42xOBIE.jpg"
                                    alt="img" />
                            </div>
                            <div className="item_sec2">
                                <h2 className='title'><span>Title:</span></h2>
                                <p className='subtitle'><span>subtitle:</span> F. Scott Fitzgerald</p>
                                <h4 className='publisher'><span>Publisher:</span> Publisher Name</h4>
                                <p className='language'><span>Language:</span>English</p>
                                <p className='genre'><span>genre:</span>Fiction</p>
                            </div>
                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn">Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <span>★★★★☆</span>
                                    <span>(12345)</span>
                                </div>
                            </div>
                        </div>
                        <div className="item_box">
                            <div className="item_sec">
                                <img className="book_img"
                                    src="https://marketplace.canva.com/EAFzmEHEJPw/2/0/1024w/canva-neutral-minimalist-aesthetic-time-management-ebook-cover-PSoR42xOBIE.jpg"
                                    alt="img" />
                            </div>
                            <div className="item_sec2">
                                <h2 className='title'><span>Title:</span> The Whispering City</h2>
                                <p><span>Author:</span> F. Scott Fitzgerald</p>
                                <p>Paperback, 9780743273565</p>
                                <p><span>Description:</span>
                                    In the heart of New York, journalist Anna Carter lives for the thrill of the next big story. But
                                    when an anonymous letter lands on her desk, her life takes a dangerous turn.</p>
                            </div>
                            <div className="item_sec3">
                                <div className="btns">
                                    <button className="read_btn">Read now</button>
                                    <button className="mybooks_btn">Add to My Books</button>
                                </div>
                                <div className="rating">
                                    <h4>Rating</h4>
                                    <span>★★★★☆</span>
                                    <span>(12345)</span>
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