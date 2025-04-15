import React from 'react'

import './footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer_logo">
                <div className="tvs_svg"></div>
                <h1 className="heading0"><span>digi</span>Library</h1>
            </div>
            <div className="container0">
                <div className="footer_col">
                    <h3 className="heading1">STORIES</h3>
                    <p>FICTION STORIES</p>
                    <ul className="item">
                        <li>Adventure</li>
                        <li>Mystery & Thriller</li>
                        <li>Fantasy</li>
                        <li>Science Fiction</li>
                        <li>Historical Fiction</li>
                        <li>Horror</li>
                    </ul>
                    <p>Short Stories & Anthologies</p>
                    <p>Cultural & Regional Stories</p>
                    <p>Mythological Stories</p>
                    <p>Modern Retellings of Classics</p>
                    <p>Epics & Sagas</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">NOVELS</h3>
                    <p>Genre Fiction</p>
                    <ul className="item">
                        <li>Mystery & Thriller</li>
                        <li>Science Fiction</li>
                        <li>Fantasy</li>
                        <li>Horror</li>
                        <li>Adventure</li>
                    </ul>
                    <p>Literary Fiction</p>

                    <h3 className="heading2">SCIENCE</h3>
                    <p>Astronomy</p>
                    <p>Earth Science</p>
                    <p>Material Science</p>
                    <p>Biotechnology</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">MORE</h3>
                    <p>ebooks</p>

                    <h3 className="heading2">NOVELS</h3>
                    <p>Literary Fiction</p>
                    <p>Genre Fiction</p>
                    <p>King Duramax Plus</p>
                    <p>King Kargo</p>

                    <h3 className="heading2">OTHER</h3>
                    <p>Philosophy</p>
                    <p>Business & Finance</p>
                    <p>Technology & Computing</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">INVESTORS</h3>
                    <p>Overview</p>
                    <p>Finacial Reports</p>
                    <p>Communication</p>

                    <h3 className="heading2">BIOGRAPHY</h3>
                    <p>Autobiography & Memoir</p>
                    <p>Political Biographies</p>
                    <p>Sports Biographies</p>
                    <p>Scientists Biographies</p>
                    <p>Journalist Biographies</p>
                    <p>Entrepreneurs Biographies</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">ABOUT US</h3>
                    <p>Overview</p>
                    <p>Our Vision</p>
                    <p>Achievements</p>
                    <p>Careers</p>
                    <p>Contact Us</p>

                    <h3 className="heading2">NEWS & MEDIA</h3>
                    <p>News</p>
                    <p>Press Release</p>
                    <p>Blog</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">SHOP</h3>
                    <p>Publishers</p>
                    <p>Publications</p>
                    <p>Authors</p>

                    <h2 className="heading2"><span>digi</span>Library App</h2>
                </div>
            </div>
            <div className="contact">
                <div className="contact_container">
                    <h4 className="heading4">CONTACT</h4>
                    <a href="/" className="link">1800 2787 5557</a>
                </div>
                <div className="contact_container">
                    <h4 className="heading4">EMAIL</h4>
                    <a href="/" className="link">customercare@digiLibrary.com</a>
                </div>
                <div className="contact_container">
                    <h4 className="heading4">NEED ASSISTANCE</h4>
                    <a href="/" className="link">Dial - 1800 2584 7251 and Press "1"</a>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="copyright">&copy digiLibrary. All Rights
                Reserved | Privacy Policy |
                Disclaimer | Cookie Policy
            </div>
        </footer>
    )
}

export default Footer