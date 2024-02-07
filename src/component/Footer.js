import React from 'react'
import {Link} from 'react-router-dom'
// Simple footer component created with html and css
function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="list">
                    <div className="footer-links">

                      
                        <Link className='link' to='/'> HOME</Link>
<Link className='link' to='/about'> ABOUT</Link>
<Link className='link' to='/contact'>CONTACT US</Link>
<Link className='link' to='/discover'>BEDROOMS</Link>
             
                    </div>
                </div>
                <div className="list">
                    <div className="footer-icons">
                        <h4>Horizon</h4>

                        <p>
                        Gamla Tyresovagen 326. Enskededalen <br></br> Stockholm, Sweden 0012
                        </p>
                        <p>010-3456-776</p>
                        <p>horizon@gmail.com</p>
                    </div>
                </div>
                <div className="list">
                    <div className="footer-info">
                        <h4>JOIN US</h4>
                       
                    </div>
                    <div className="search-container">
                        <p>Sign up for our exclusive offers</p>
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
