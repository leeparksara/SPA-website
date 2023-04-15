import React, { useState } from 'react'
import BookingButton from './BookingButton'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
// Slider component starts here, creating an array with images to render each image
// next and previouse buttons have two click events
const SliderComponent = (props) => {
    const images = [
        'https://images.unsplash.com/photo-1552046122-03184de85e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1542848285-4777eb2a621e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',

        'https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
        'https://images.unsplash.com/photo-1544843776-7c98a52e08a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextClickEvent = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length)
    }

    const previousClickEvent = () => {
        setCurrentImageIndex(
            (currentImageIndex + images.length - 1) % images.length
        )
    }
    const [divHidden, setDivHidden] = useState(false)
    // the foruth div will only be shown when the next button is clicked otherwise it only show 3 images
    const hideDiv = () => {
        setDivHidden(!divHidden)
    }

    return (
        <div className="sliderContainer">
            <div className="mySlide">
                <div>
                    <img
                        src={
                            images[
                                (currentImageIndex + 1 + images.length) %
                                    images.length
                            ]
                        }
                        alt="slider"
                    />
                    <div className="slideInfo">
                        <h4>A Weekend in Romantic Bath</h4>
                        <p>
                            {' '}
                            Treat yourself to a romantic getaway
                            <br />
                        </p>
                        <BookingButton />
                    </div>
                </div>
                <div>
                    <img
                        src={
                            images[
                                (currentImageIndex - 2 + images.length) %
                                    images.length
                            ]
                        }
                        alt="slider"
                    />
                    <div className="slideInfo">
                        <h4>A Weekend in Romantic Bath</h4>
                        <p>
                            {' '}
                            Treat yourself to a romantic getaway
                            <br />
                        </p>
                        <BookingButton />
                    </div>
                </div>
                <div>
                    <img src={images[currentImageIndex]} alt="slider" />
                    <div className="slideInfo">
                        <h4> LUSH Spa Bath</h4>
                        <p>
                            Lush treatment to transform mind and body.
                            <br />
                        </p>
                        <BookingButton />
                    </div>
                </div>

                {divHidden && (
                    <div>
                        <img
                            src={
                                images[(currentImageIndex + 3) % images.length]
                            }
                            alt="slider"
                        />
                        <div className="slideInfo">
                            <h4>new div</h4>
                            <p> try award-winning Thermae Bath Spa.</p>
                            <BookingButton />
                        </div>
                    </div>
                )}
            </div>
            <div className="buttons">
                <IoIosArrowBack
                    className="arrow"
                    onClick={previousClickEvent}
                />

                <IoIosArrowForward
                    className="arrow"
                    onClick={(nextClickEvent, hideDiv)}
                />
            </div>
        </div>
    )
}

export default SliderComponent
