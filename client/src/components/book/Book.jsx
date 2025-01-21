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
                        <div className='Book-content'>
                            <span>
                                <div className="heading"><h1 className='Book-title'>Time Management</h1></div>
                                <div class="subheading">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis esse impedit placeat, </p>

                                </div>
                                <h2>By:<a href="#">OLIVIA WILSON</a></h2>
                            </span>
                            <div className="rating-box">
                            <div className='rating-box1'>
                                <div><div id="rate"><h1>3.9 x</h1></div></div>
                            </div>
                            <div className='rating-box2'><div id="Ebook">Ebook</div></div>
                            <div className='rating-box3'><div id="pages">pages</div></div>
                            </div>

                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}

export default Book