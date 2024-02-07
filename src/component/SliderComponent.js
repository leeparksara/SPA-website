import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaLongArrowAltRight } from "react-icons/fa";
const SliderComponent = (props) => {
    const images = [
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1615722440048-da4ccf6de048?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    const slides = [
        {
            title: 'One Bedroom Delux Villa',
            description: 'Spoil Yourself And Your Loved One With Lush Tropical View',
        },
        {
            title: 'One Bedroom Pool Villa',
            description: 'Our One-bedroom Pool Villas provide a serene and spacious retreat for couples.',
        },
        {
            title: 'Three Bedroom Pool Villa',
            description: 'Our Three Bedroom Pool Villa Is Generous Sized With An Amazing View',
        },
        {
            title: 'Two Bedroom Pool Villa',
            description: 'Enjoy Stunning View Of Our Resort With Blissful Surrounding',
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextClickEvent = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const previousClickEvent = () => {
        setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
    };

    return (
        <div className="sliderContainer">
        <div className='slide-title'>
            <h2>Our Rooms</h2>
            <span className='first-line'> </span>
            <span className='second-line'> </span>
        </div>
            <div className="mySlide">
                <div>
                    <img
                        src={images[currentImageIndex]}
                        alt="slider"
                    />
                    <div className="slideInfo">
                        <h4>{slides[currentImageIndex].title}</h4>
                        <p>{slides[currentImageIndex].description}</p>
                        <button className='btn'>Discover <FaLongArrowAltRight /></button>
                    </div>
                </div>
                <div>
                    <img
                        src={images[(currentImageIndex + 2) % images.length]}
                        alt="slider"
                    />
                    <div className="slideInfo">
                        <h4>{slides[(currentImageIndex + 2) % images.length].title}</h4>
                        <p>{slides[(currentImageIndex + 2) % images.length].description}</p>
               <Link to='/discover'> <button className='btn'>Discover <FaLongArrowAltRight /></button></Link>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <IoIosArrowBack className="arrow" onClick={previousClickEvent} />
                <IoIosArrowForward className="arrow" onClick={nextClickEvent} />
            </div>
        </div>
    );
};

export default SliderComponent;
