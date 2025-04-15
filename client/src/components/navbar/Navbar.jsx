import React from 'react'

import './navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <ul className="dropdown-toggle">
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>ABOUT US</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec1">
                        <li className="option">Overview</li>
                        <li className="option">Our Vision</li>
                        <li className="option">Achievements</li>
                        <li className="option">Careers</li>
                        <li className="option">Contact Us</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>SCIENCE</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec1">
                        <li className="option">Astronomy</li>
                        <li className="option">Biotechnology</li>
                        <li className="option">Microbiology</li>
                        <li className="option">Health Sciences</li>
                        <li className="option">Environmental Science</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>PSHYCOLOGY</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec1">
                        <li className="option">General Psychology</li>
                        <li className="option">Developmental Psychology</li>
                        <li className="option">Clinical Psychology</li>
                        <li className="option">Social Psychology</li>
                        <li className="option">Behavioral Psychology</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>BOIGRAPHY</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec4">
                        <li className="option">Autobiography & Memoir</li>
                        <li className="option">Political & Historical Biographies</li>
                        <li className="option">Celebrity & Entertainment Biographies</li>
                        <li className="option">Sports Biographies</li>
                        <li className="option">Business & Entrepreneurs Biographies</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>NOVELS</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec5">
                        <li className="option">Detective Novels</li>
                        <li className="option">Science Fiction</li>
                        <li className="option">Urban Fantasy</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>STORIES</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec6">
                        <li className="option">Fiction Stories</li>
                        <li className="option">Short Stories & Anthologies</li>
                        <li className="option">Cultural & Regional Stories</li>
                        <li className="option">Classic Literature & Retellings</li>
                        <li className="option">Mythological Stories</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>SOMETHING</p>
                    </div>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>SHOP</p>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar