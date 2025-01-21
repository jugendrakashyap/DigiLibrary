import React from 'react'

import '../../css/book.css'

function Book() {
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
                            <div class="book_btns"></div>
                        </div>
                    </section>

                    <section className="description_section">
                        <div className="Navbar">
                            
                        </div>

                        <div className="information">
                            {/* <h1 >This book is written by me vinod samajh rahe ho</h1> */}
                            <div class="work-title-and-author desktop">
                                <span>
                                   
                                    <div className="Heading"><h1 class="work-title" itemprop="name">Time Management</h1></div>
                                    <div class="work-line">
                                        An edition of <a href="#">Time Management (Build your future to controll your waste of time)</a>
                                        <span class="first-published-date" title="First published in 2025">
                                            (2025)
                                        </span>
                                    </div>

                                    <div class="work-line">
                                        1st ed.
                                    </div>
                                </span>
                                <div className="Book-discription"><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, assumenda quo. Quibusdam animi, voluptatem eligendi vitae ipsum ducimus dolore ab consequatur asperiores unde voluptas necessitatibus ad libero sequi voluptate modi nesciunt expedita deserunt voluptatum et exercitationem, laborum nisi repudiandae similique. Eaque delectus aliquid modi inventore, reiciendis quas rerum ex obcaecati!</p></div>
                                <br />
                                <div className="sec-container">
                                    <div>hellow</div>
                                    <div>hellow</div>
                                    <div>hellow</div>
                                </div>
                                <ul class="readers-stats  " itemprop="aggregateRating" itemscope="" itemtype="https://schema.org/AggregateRating">
                                        <li class="avg-ratings" onclick="location.href='#starRatingSection';" data-ol-link-track="StarRating|StatsComponentClick">


                                            <span class="star star--small">★</span><span class="star star--small">★</span><span class="star star--small">★</span>
                                            <span class="star star--half star--small">★</span>

                                            <span class="dot">·</span>
                                        </li>
                                        <li class="reading-log-stat"><span class="readers-stats__stat">924</span> <span class="readers-stats__label">Want to read</span></li>
                                        <li class="reading-log-stat"><span class="readers-stats__stat">87</span> <span class="readers-stats__label">Currently reading</span></li>
                                        <li class="reading-log-stat"><span class="readers-stats__stat">212</span> <span class="readers-stats__label">Have read</span></li>
                                    </ul>

                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Book