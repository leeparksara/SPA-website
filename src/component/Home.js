import React from 'react'

import video from './images/video.mp4'
import NavBar from './NavBar'
import Footer from './Footer'
import SliderComponent from './SliderComponent'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Contact from './Contact'
import OutdoorSpa from './OutdoorSpa'
import '../App.css'
import SliderContext from './SliderContext'

import Offers from './Offers'

// Main page with the same nav-bar, hero text and footer that will appear everywhere on the website
function CoverImage() {
    // Creating a function to hide the footer and show it only when the user scrolls down the page
    const [showFooter, setShowFooter] = useState(false)
    // Creating a function to hide the slider component when the user clicks on other navigation links
    const [showSlider, setShowSlider] = useState(true)

    // Here is the scroll event for the footer, using useEffect
    const scrollEvent = () => {
        const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight
        setShowFooter(scrolledToBottom)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollEvent)
        return () => window.removeEventListener('scroll', scrollEvent)
    }, [])

    return (
        // wrapping the home component content with the provider
        <SliderContext.Provider value={{ showSlider, setShowSlider }}>
            <div>
                <NavBar />
                <div className="background">
                    <video
                        src={video}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        className="video-background"
                    />

                    <div className="text-overlay">
                        <h3>
                            Horizon Is A place To Relax And Recharge Your Body
                        </h3>
                    </div>

                    <div className="con">
                        <Routes>
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>

                    <div className="con2">
                        <Routes>
                            {' '}
                            <Route
                                path="/outdoorspa"
                                element={<OutdoorSpa />}
                            />
                        </Routes>
                    </div>
                </div>
                <div className="con3">
                    <Routes>
                        <Route path="/offers" element={<Offers />} />
                    </Routes>
                </div>

                {showSlider && (
                    <div className="sli">
                        {' '}
                        <SliderComponent />
                    </div>
                )}

                {showFooter && (
                    <div className="footer-con">
                        <Footer />
                    </div>
                )}
            </div>
        </SliderContext.Provider>
    )
}

export default CoverImage
