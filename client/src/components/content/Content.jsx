import React from 'react'

function content() {
    function scrollPage() {
        document.getElementById('scrollable').scrollBy({ left: 500, behavior: 'smooth' })
    }
    return (
        <main>
            <section class="hero"></section>

            <section class="sec sec1">
                <div class="label1">
                    <div class="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div class="forStyle"></div>
                </div>
                <div class="books" id='scrollable'>
                    <div className='scroll_btn' onClick={scrollPage}></div>
                    <div>
                        <div class="book book2"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                </div>
            </section>

            <section class="sec sec1">
                <div class="label1">
                    <div class="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div class="forStyle"></div>
                </div>
                <div class="books">
                    <div>
                        <div class="book book2"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                </div>
            </section>

            <section class="sec sec1">
                <div class="label1">
                    <div class="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div class="forStyle"></div>
                </div>
                <div class="books">
                    <div>
                        <div class="book book2"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                </div>
            </section>

            <section class="sec sec1">
                <div class="label1">
                    <div class="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div class="forStyle"></div>
                </div>
                <div class="books">
                    <div>
                        <div class="book book2"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book4"></div>
                        <h3>Book Name</h3>
                    </div>
                    <div>
                        <div class="book book3"></div>
                        <h3>Book Name</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default content