import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from './Table';
//import SliderContext from './SliderContext';

function NavBar() {
    //const { setShowSlider } = useContext(SliderContext);
    const [showBookingForm, setShowBookingForm] = useState(false);

   /* const linkClickEvent = () => {
        setShowSlider(false);
    }; */

    const openBookingForm = () => {
        setShowBookingForm(true);
    };

    const closeBookingForm = () => {
        setShowBookingForm(false);
    };

    return (
        <TransparentNavbar  expand="lg" variant="light" bg="light" >
            <Container className='contain'>
                <Navbar.Brand as={Link} to="/">
                    Horizon
                </Navbar.Brand>
                <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/outdoorspa" >
                            Spa
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" >
                            About Us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <BookingLinks className='bookingLinks'>
                <Link className="navLink">Book Room  </Link>
                <Link className="navLink" onClick={openBookingForm}>
                    Book Table
                </Link>
            </BookingLinks>
                </Navbar.Collapse>
            </Container>
         
            {showBookingForm && (
                <BookingContainer>
                    <Table onClose={closeBookingForm} />
                </BookingContainer>
            )}
        </TransparentNavbar>
    );
}

export default NavBar;


const BookingLinks = styled.div`
    display: flex; 
    column-gap:20px;
  .navLink{
  }
  .navbar{
    height:100px;
    background:#000;
  }

  
    @media (max-width: 768px) {
        display: grid; 
       
    }
   
  
`;
const TransparentNavbar = styled(Navbar)`

    
`;
const BookingContainer = styled.div`
    width: 100%;
    position: fixed;
    background-color: #292b33;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    height: 150vh;
    padding: 20px;
    z-index: 1000;
    padding-bottom: 20%;
`;
