import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Table from './Table'
import SliderContext from './SliderContext'


function NavBar() {
    // Click event for the slider component, setting the slider to false when some of the navigation links are clicked
    const { setShowSlider } = useContext(SliderContext)
// Create a sate for the booking form
const [showBookingForm, setShowBookingForm] = useState(false);
    const linkClickEvent = () => {
        setShowSlider(false)
    }


    const openBookingForm = ()=>{
        setShowBookingForm(true);
    }

    const closeBookingForm =() =>{
        setShowBookingForm(false)
    }
    return (
        <div className='navv'   >
            <div >
                <Wrap>
                    <Container id="container">
                        <Link className="navLogo" to="/">
                            Horizon
                        </Link>

                        <div aria-controls="basic-navbar-nav" />
                        <div id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <div className="links">
                                    <div className="li">
                                        <Link className="navLink" to="/">
                                            Home
                                        </Link>
                                        
<Link className='navLink' to='/outdoorspa'>
 Spa
</Link>
<Link className='navLink' to='/about'>
    About 
</Link>

                                        <Link
                                            onClick={linkClickEvent}
                                            className="navLink"
                                            to="/contact"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>

                                    
                                </div>
                            </Nav>
                        </div>
                     
                    </Container>

                   
                </Wrap>
               
            </div>
            <div className='booking-links'>
                        <Link  className='navLink'>
                            Book Room
                        </Link>
                        <Link   className='navLink' onClick={openBookingForm}>
                            Book Table
                        </Link>
                    </div>
                    {showBookingForm && (
                        <BookingContainer >
                        <Table onClose={closeBookingForm} />
                        </BookingContainer>
                    )} 
        </div>
    )
}
// using Styled component to style the navb-bar
export default NavBar

const Wrap = styled(Container)

`

 
#container {
    font-size: 1.2em;
    display: flex;
 height:80px;
    column-gap: 8rem;
align-items:center;

    

}

.navLink {
    color: #425c63;
    font-weight: 400;
    font-family: arial;
    text-decoration: none;
    
}

#basic-nav-dropdown {
    color: #425c63;
    font-weight: 400;
    font-family: arial;

   
}
.navLogo {
    
    color: #425c63;
    font-size: 1.8em;
    font-weight: bold;
    font-family: Monospace;
    cursor: pointer;
    text-decoration: none;
   
}
.dropdownItem {
    color: #425c63;
}


`
const BookingContainer = styled.div`
width:100%;
 position: fixed;

 background-color: #292b33; 
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:#fff;
  height:150vh;
  padding: 20px;
  z-index: 1000;
  padding-bottom:20%;
 

`;