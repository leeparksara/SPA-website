import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaLongArrowAltRight } from "react-icons/fa";

const SliderComponent = (props) => {
    const images = [
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1615722440048-da4ccf6de048?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    const slides = [
        {
            title: 'One Bedroom Delux Villa',
            description: 'Spoil Yourself And Your Loved One With Lush Tropical View',
            link: '/delux'
        },
        {
            title: 'One Bedroom Pool Villa',
            description: 'Our One-bedroom Pool Villas provide a serene and spacious retreat for couples.',
            link: '/one-bedroom'
        },
        {
            title: 'Three Bedroom Pool Villa',
            description: 'Our Three Bedroom Pool Villa Is Generous Sized With An Amazing View',
            link: '/discover'
        },
        {
            title: 'Two Bedroom Pool Villa',
            description: 'Enjoy Stunning View Of Our Resort With Blissful Surrounding',
            link: '/two-bedroom'
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this value as per your design needs
        };

        handleResize(); // Call once to set the initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextClickEvent = () => {
        setCurrentImageIndex((currentImageIndex + 1) % slides.length);
    };

    const previousClickEvent = () => {
        setCurrentImageIndex((currentImageIndex + slides.length - 1) % slides.length);
    };

    return (
        <div className="sliderContainer">
            <div className='slide-title'>
                <h2>Our Rooms</h2>
                <span className='first-line'> </span>
                <span className='second-line'> </span>
            </div>
            <div className={`mySlide ${isMobile ? 'mobile-view' : ''}`}>
                <div>
                    <img
                        src={images[currentImageIndex]}
                        alt="slider"
                    />
                    <div className="slideInfo">
                        <h4>{slides[currentImageIndex].title}</h4>
                        <p>{slides[currentImageIndex].description}</p>
                        <Link to={slides[currentImageIndex].link} className='btn'>Discover <FaLongArrowAltRight /></Link>
                    </div>
                </div>
                {!isMobile && (
                    <div>
                        <img
                            src={images[(currentImageIndex + 1) % slides.length]}
                            alt="slider"
                        /> 
                        <div className="slideInfo">
                            <h4>{slides[(currentImageIndex + 1) % slides.length].title}</h4>
                            <p>{slides[(currentImageIndex + 1) % slides.length].description}</p>
                            <Link to={slides[(currentImageIndex + 1) % slides.length].link} className='btn'>Discover <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="buttons">
                <IoIosArrowBack className="arrow" onClick={previousClickEvent} />
                <IoIosArrowForward className="arrow" onClick={nextClickEvent} />
            </div>
        </div>
    );
};

export default SliderComponent;
