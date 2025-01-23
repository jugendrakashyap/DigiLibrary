import React from 'react'

import '../../css/navbar.css'
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
                        <li className="option">Company Vision</li>
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
                        <li className="option">Overview</li>
                        <li className="option">Company Vision</li>
                        <li className="option">Achievements</li>
                        <li className="option">Careers</li>
                        <li className="option">Contact Us</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>PSHYCOLOGY</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec1">
                        <li className="option">Overview</li>
                        <li className="option">Company Vision</li>
                        <li className="option">Achievements</li>
                        <li className="option">Careers</li>
                        <li className="option">Contact Us</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>BOIGRAPHY</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec4">
                        <li className="option">Overview</li>
                        <li className="option">Finacial Reports</li>
                        <li className="option">Investor Information</li>
                        <li className="option">Investor Communication</li>
                        <li className="option">SEBI Discloser</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>NOVELS</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec5">
                        <li className="option">ESG Profile</li>
                        <li className="option">Option2</li>
                        <li className="option">Option3</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>STORIES</p>
                        <div className="mini-menu"></div>
                    </div>
                    <ul className="options sec6">
                        <li className="option">Press Release</li>
                        <li className="option">News</li>
                        <li className="option">Blog</li>
                        <li className="option">Press Kit</li>
                        <li className="option">Media Contact</li>
                    </ul>
                </li>
                <li className="dropdown-menu">
                    <div className="menu">
                        <p>FICTION</p>
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