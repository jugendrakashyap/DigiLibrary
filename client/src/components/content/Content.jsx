import React from 'react'

import '../../css/content.css'

function content() {
    function scrollPage() {
        document.getElementById('scrollable').scrollBy({ left: 500, behavior: 'smooth' })
    }
    return (
        <main>
            <section className="hero">
                <div>
                    <div className='slide slide1'></div>
                </div>
                <div>
                    <div className='slide slide2'></div>
                </div>
                <div>
                    <div className='slide slide3'></div>
                </div>
            </section>

            <section className="sec sec1">
                <div className="label1">
                    <div className="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div className="forStyle"></div>
                </div>
                <div className="books" id='scrollable'>
                    <div className='scroll_btn' onClick={scrollPage}></div>
                    <div>
                        <div className="book book1"></div>
                    </div>
                    <div>
                        <div className="book book2"></div>
                    </div>
                    <div>
                        <div className="book book3"></div>
                    </div>
                    <div>
                        <div className="book book4"></div>
                    </div>
                    <div>
                        <div className="book book1"></div>
                    </div>
                    <div>
                        <div className="book book2"></div>
                    </div>
                    <div>
                        <div className="book book3"></div>
                    </div>
                    <div>
                        <div className="book book4"></div>
                    </div>
                </div>
            </section>

            <section className="sec sec1">
                <div className="label1">
                    <div className="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div className="forStyle"></div>
                </div>
                <div className="books" id='scrollable'>
                    <div className='scroll_btn' onClick={scrollPage}></div>
                    <div>
                        <div className="book book1"></div>
                    </div>
                    <div>
                        <div className="book book2"></div>
                    </div>
                    <div>
                        <div className="book book3"></div>
                    </div>
                    <div>
                        <div className="book book4"></div>
                    </div>
                    <div>
                        <div className="book book1"></div>
                    </div>
                    <div>
                        <div className="book book2"></div>
                    </div>
                    <div>
                        <div className="book book3"></div>
                    </div>
                    <div>
                        <div className="book book4"></div>
                    </div>
                </div>
            </section>

            <section className="sec sec1">
                <div className="label1">
                    <div className="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div className="forStyle"></div>
                </div>
                <div className="books" id='scrollable'>
                    <div className='scroll_btn' onClick={scrollPage}></div>
                    <div>
                        <div className="book book1"></div>
                    </div>
                    <div>
                        <div className="book book2"></div>
                    </div>
                    <div>
                        <div className="book book3"></div>
                    </div>
                    <div>
                        <div className="book book4"></div>
                    </div>
                    <div>
                        <div className="book book1"></div>
                    </div>
                    <div>
                        <div className="book book2"></div>
                    </div>
                    <div>
                        <div className="book book3"></div>
                    </div>
                    <div>
                        <div className="book book4"></div>
                    </div>
                </div>
            </section>

            <section className="sec sec1">
                <div className="label1">
                    <div className="label">
                        <h1>Discover Our Latest Releases</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum sed felis</p>
                    </div>
                    <div className="forStyle"></div>
                </div>
                <div className="books" id='scrollable'>
                    <div className='scroll_btn' onClick={scrollPage}></div>
                    <div>
                        <div className="book book1"></div>
                    </div>
                    <div>
                        <div className="book book2"></div>
                    </div>
                    <div>
                        <div className="book book3"></div>
                    </div>
                    <div>
                        <div className="book book4"></div>
                    </div>
                    <div>
                        <div className="book book5"></div>
                    </div>
                    <div>
                        <div className="book book6"></div>
                    </div>
                    <div>
                        <div className="book book7"></div>
                    </div>
                    <div>
                        <div className="book book8"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default content