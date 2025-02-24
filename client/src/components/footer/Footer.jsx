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
                    <h3 className="heading1">MOTORCYCLES</h3>
                    <p>TVS Apache</p>
                    <ul className="item">
                        <li>RTR310</li>
                        <li>RR310</li>
                        <li>RTR 200 4V</li>
                        <li>RTR 180</li>
                        <li>RTR 160 4V</li>
                        <li>RTR 160</li>
                    </ul>
                    <p>Ronin</p>
                    <p>Raider</p>
                    <p>Redeon</p>
                    <p>Sport</p>
                    <p>Star City+</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">ELECTRIC SCOOTERS</h3>
                    <p>TVS iQube</p>
                    <ul className="item">
                        <li>iQube 2.2 kWh</li>
                        <li>iQube 3.4 kWh</li>
                        <li>iQube S 3.4 kWh</li>
                        <li>iQube ST 3.4 kWh</li>
                        <li>iQube S 5.1 kWh</li>
                    </ul>
                    <p>TVS X</p>

                    <h3 className="heading2">SCOOTERS</h3>
                    <p>Jupiter 110</p>
                    <p>Jupiter 125</p>
                    <p>Ntorq</p>
                    <p>Zest 110</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">MOPEDS</h3>
                    <p>XL 100</p>

                    <h3 className="heading2">THREE WHEELERS</h3>
                    <p>King Deluxe</p>
                    <p>King Duramax</p>
                    <p>King Duramax Plus</p>
                    <p>King Kargo</p>

                    <h3 className="heading2">RIDES & EVENTS</h3>
                    <p>TVS Racing</p>
                    <p>TVS Motosoul</p>
                    <p>TVS Storm the Sands 2024</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">INVESTORS</h3>
                    <p>Overview</p>
                    <p>Finacial Reports</p>
                    <p>Communication</p>

                    <h3 className="heading2">TVS DEALER LOCATOR</h3>
                    <p>Two Wheeler Dealers</p>
                    <p>Three Wheeler Dealers</p>
                    <p>Super Premium Dealers</p>
                    <p>Electric Scooter Dealers</p>
                    <p>AMD & AD Dealers</p>
                    <p>iQube Dealers</p>
                </div>
                <div className="footer_col">
                    <h3 className="heading1">ABOUT US</h3>
                    <p>Overview</p>
                    <p>Company Vision</p>
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
                    <p>Accessories</p>
                    <p>Merchandise</p>
                    <p>Parts & Lubricants</p>

                    <h2 className="heading2"><span>digi</span>Library App</h2>
                </div>
            </div>
            <div className="contact">
                <div className="contact_container">
                    <h4 className="heading4">CONTACT</h4>
                    <a href="#" className="link">1800 2587 555</a>
                </div>
                <div className="contact_container">
                    <h4 className="heading4">EMAIL</h4>
                    <a href="#" className="link">customercare@tvsmoto.com</a>
                </div>
                <div className="contact_container">
                    <h4 className="heading4">NEED ROAD SIDE ASSISTANCE</h4>
                    <a href="#" className="link">Dial - 1800 258 7111 and Press "1"</a>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="copyright">&copy TVS Motor. All Rights
                Reserved | Privacy Policy |
                Disclaimer | Cookie Policy
            </div>
        </footer>
    )
}

export default Footer