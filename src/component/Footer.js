import React from 'react'
// Simple footer component created with html and css
function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="list">
                    <div className="footer-icons">
                        <h4>Contact</h4>

                        <h5>010-3456-776</h5>
                        <h5>horizon@gmail.com</h5>
                    </div>
                </div>
                <div className="list">
                    <div className="footer-icons">
                        <h4>Location</h4>

                        <h5>
                            WinderStreet 22 <br></br> Stockholm, Sweden
                        </h5>
                    </div>
                </div>
                <div className="list">
                    <div className="footer-info">
                        <h4>Hours</h4>
                        <div className="open-hours">
                            <div>
                                <h5>Monday -Friday</h5>
                                <h5>Weekend</h5>
                            </div>

                            <div>
                                <h6>8:00AM - 11:00pm</h6>
                                <h6>9:00AM - 10:00pm</h6>
                            </div>
                        </div>
                    </div>
                    <div className="search-container">
                        <p>Sign up for Horaizon news and exclusive offers</p>
                        <input type="search" placeholder="Subscribe" />
                        <button class="sub-button">Join</button>
                    </div>
                </div>
            </div>
            <p>© Copyright 2023 Horizon</p>
        </div>
    )
}

export default Footer
