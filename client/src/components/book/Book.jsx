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
                        
                    </section>
                </div>
            </main>
        </>
    )
}

export default Book