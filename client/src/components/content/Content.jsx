import React from 'react'

import '../../css/content.css'

function content() {
    function scrollRight() {
        const container = document.getElementById('scrollable')
        container.scrollBy({ left: 500, behavior: 'smooth' })
    }

    function scrollLeft() {
        const container = document.getElementById('scrollable');
        container.scrollBy({ left: -500, behavior: 'smooth' });
    }
    
    function checkScrollEnd() {
        const container = document.getElementById('scrollable');
        const scrollLeftBtn = document.getElementById('scroll_left_btn');
        const scrollRightBtn = document.getElementById('scroll_right_btn');
        console.log(container.scrollLeft);

        if (container.scrollLeft === 0) {
            scrollLeftBtn.style.display = 'none';
        } else {
            scrollLeftBtn.style.display = 'block';
        }
        
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            scrollRightBtn.style.display = 'none';
            scrollLeftBtn.style.display = 'block';
        } else {
            scrollRightBtn.style.display = 'block';
        }
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
                <div className="books" id='scrollable' onScroll={checkScrollEnd}>
                    <div className='scroll_btn left_scroll_btn' id='scroll_left_btn' onClick={scrollLeft}></div>
                    <div>
                        <div className="book book1" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book2" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book3" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book4" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book1" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book2" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book3" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book4" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div className='scroll_btn right_scroll_btn' id='scroll_right_btn' onClick={scrollRight}></div>
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
                <div className='scroll_btn left_scroll_btn' id='scroll_left_btn' onClick={scrollLeft}></div>
                    <div>
                        <div className="book book1" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book2" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book3" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book4" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book1" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book2" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book3" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book4" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div className='scroll_btn right_scroll_btn' id='scroll_right_btn' onClick={scrollRight}></div>
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
                <div className='scroll_btn left_scroll_btn' id='scroll_left_btn' onClick={scrollLeft}></div>
                    <div>
                        <div className="book book1" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book2" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book3" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book4" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book1" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book2" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book3" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book4" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div className='scroll_btn right_scroll_btn' id='scroll_right_btn' onClick={scrollRight}></div>
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
                <div className='scroll_btn left_scroll_btn' id='scroll_left_btn' onClick={scrollLeft}></div>
                    <div>
                        <div className="book book1" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book2" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book3" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book4" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book5" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book6" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book7" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div>
                        <div className="book book8" onClick={() => window.location.href = "/book"}></div>
                    </div>
                    <div className='scroll_btn right_scroll_btn' id='scroll_right_btn' onClick={scrollRight}></div>
                </div>
            </section>
        </main>
    )
}

export default content