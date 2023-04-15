import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import BookingButton from './BookingButton'

import SliderContext from './SliderContext'

function NavBar() {
    //Bootstrap is used to create nav-bar
    // Click event for the slider component, setting the slider to false when some of the navigation links are clicked
    const { setShowSlider } = useContext(SliderContext)

    const linkClickEvent = () => {
        setShowSlider(false)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Wrap>
                    <Container id="container">
                        <Link className="navLogo" to="/">
                            Horizon
                        </Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <div className="links">
                                    <div className="li">
                                        <Link className="navLink" to="/">
                                            Home
                                        </Link>

                                        <Link
                                            onClick={linkClickEvent}
                                            className="navLink"
                                            to="/contact"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>

                                    <NavDropdown
                                        title="Services"
                                        id="basic-nav-dropdown"
                                    >
                                        <div className="services">
                                            <Link
                                                onClick={linkClickEvent}
                                                className="navLink"
                                                to="outdoorspa"
                                            >
                                                Outdoor
                                            </Link>
                                            <Link
                                                onClick={linkClickEvent}
                                                className="navLink"
                                                to="/offers"
                                            >
                                                Offers
                                            </Link>
                                            <Link
                                                onClick={linkClickEvent}
                                                className="navLink"
                                                to="/"
                                            >
                                                indoor
                                            </Link>
                                        </div>
                                    </NavDropdown>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                        <BookingButton />
                    </Container>
                </Wrap>
            </Navbar>
        </div>
    )
}
// using Styled component to style the navb-bar
export default NavBar

const Wrap = styled(Container)`
    #container {
        font-size: 1.2em;
        display: flex;

        column-gap: 5rem;
    }

    .navLink {
        color: #0092ca;
        font-weight: 400;
        font-family: arial;
        text-decoration: none;
    }

    #basic-nav-dropdown {
        color: #0092ca;
        font-weight: 400;
        font-family: arial;
    }
    .navLogo {
        color: #0092ca;
        font-size: 1.8em;
        font-weight: bold;
        font-family: Monospace;
        cursor: pointer;
        text-decoration: none;
    }
    .dropdownItem {
        color: #0092ca;
    }
`
