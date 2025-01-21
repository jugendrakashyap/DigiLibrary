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

                        <div className="information">
                            {/* <h1 >This book is written by me vinod samajh rahe ho</h1> */}
                            <div class="work-title-and-author desktop">
                                <span>
                                    <div class="work-line">
                                        An edition of <a href="#">Time Management (Build your future to controll your waste of time)</a>
                                        <span class="first-published-date" title="First published in 2025">
                                            (2025)
                                        </span>
                                    </div>
                                    <h1 class="work-title" itemprop="name">Time Management</h1>

                                    <div class="work-line">
                                        1st ed.
                                    </div>
                                    <h2 class="edition-byline">

                                        by <a href="/authors/OL233594A/Robert_Jordan" itemprop="author">OLIVIA  WILSON</a>

                                    </h2>


                                    <ul class="readers-stats  " itemprop="aggregateRating" itemscope="" itemtype="https://schema.org/AggregateRating">
                                        <li class="avg-ratings" onclick="location.href='#starRatingSection';" data-ol-link-track="StarRating|StatsComponentClick">


                                            <span class="star star--small">★</span><span class="star star--small">★</span><span class="star star--small">★</span>
                                            <span class="star star--half star--small">★</span>
                                            <span itemprop="ratingValue">3.9 (140 ratings)</span>

                                            <span class="dot">·</span>
                                        </li>
                                        <li class="reading-log-stat"><span class="readers-stats__stat">924</span> <span class="readers-stats__label">Want to read</span></li>
                                        <li class="reading-log-stat"><span class="readers-stats__stat">87</span> <span class="readers-stats__label">Currently reading</span></li>
                                        <li class="reading-log-stat"><span class="readers-stats__stat">212</span> <span class="readers-stats__label">Have read</span></li>
                                    </ul>

                                </span>

                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Book