import React from 'react'
import { useState } from 'react'
import '../../css/book.css'

function Book() {
    const [data, setdata] = useState("");
    const [dataList, setdatalist] = useState([]);
    const Adddata = () => {
        setdatalist([...dataList, data]);   //with initial value add next given value
        console.log(data);
        setdata("")
    };
    return (
        <>
            <main>
                <div class="book_sections">
                    <section className="book_section">
                        <div class="book_images">
                            <div class="book_image"></div>
                            <div class="book_image"></div>
                            <div class="book_image"></div>
                            <div class="book_image"></div>
                            <div class="book_image"></div>
                        </div>
                        <div class="book_image_box">
                            <img class="book_main_image"
                                src="https://marketplace.canva.com/EAFzmEHEJPw/2/0/1024w/canva-neutral-minimalist-aesthetic-time-management-ebook-cover-PSoR42xOBIE.jpg"
                                alt="img" />
                            <div class="book_btns">
                                <div className="Buy-ebook"><button className='Buy-ebook-btn'>Get for free</button></div>
                                <div className="Buy-ebook"><button className='Buy-ebook-btn'>Buy</button></div>
                            </div>
                        </div>
                    </section>

                    <section className="description_section">
                        <div>
                            <div className='head'>
                            <div className="nav"><a href="">Home</a></div>
                            <div className="nav"><a href="">book-section</a></div>
                            <div className="nav"><a href="">free-books</a></div>
                            <div className="nav"><a href="">anothology</a></div>
                            </div>
                        </div>
                        <div className='Book-content'>
                            <span>
                                <div className="heading"><h7 className='Book-title'><span>Title:</span><span className='Book-title'>Time Management</span></h7>
                                    <h2 className='Book-title'><span>Language:</span><span className='Book-title'>(English)</span>
                                    </h2>
                                </div>
                                <div className='Subtitle'> 
                                    <p class="subheading"> <span>Subtitle :</span><span class="subheading">"Master your day with proven strategies for productivity, focus, and balance. Achieve more in less time with Olivia Wilson's expert guide to effective time management." </span></p>

                                </div>
                                <h2 className='author'>By: <a className='author' href="#">OLIVIA WILSON</a></h2>
                            </span>
                            <div className="book-info-box">
                                <div className='box'><div id="rate">3.9 x</div><div className="box1">7 reviews</div>
                                </div>
                                <div className='box'><div >80 </div><div className="box1">Price(rs)</div></div>
                                <div className='box'><div>*</div><div className="box1">pages</div></div>
                            <div className="edition">1st ed.</div>
                            </div>
                            <div className="AboutBook-text"><h1>About this book  </h1><br /><p>"Time Management by Olivia Wilson is a practical guide to mastering productivity and achieving balance in daily life. This book offers proven strategies, actionable tips, and real-life examples to help readers prioritize tasks, eliminate distractions, and maximize their efficiency. Perfect for students, professionals, and anyone looking to regain control over their time and achieve their goals with ease."</p></div>

                        </div>
                        <section className="rating">
                            <div className='feedback-sec'>
                                <h1 id='rating-text'> Give your feedback and rates it.</h1>

                                <input
                                    type="text"
                                    value={data}
                                    onChange={(e) => setdata(e.target.value)}
                                /><button id='feedback-btn' onClick={Adddata}>submit</button></div>
                            <ul className='user-comments'>
                                {dataList.map((item) => (
                                    <li>{item}</li>
                                    
                                ))}
                            </ul>
                        </section>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Book