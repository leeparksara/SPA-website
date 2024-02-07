import React from 'react'
import bell from './images/bell.png'
import bar from './images/bar.png'
import car from './images/car.png'
import NavBar from './NavBar'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Navbar } from 'react-bootstrap'

function About() {
  return (

    <div className='about'> 
   

 <Navbar/>
   
    
    <div>
        <div  className='about-intro'>

<div className='about-text' >
<h4> Welcome to Horizon resort</h4>
<p> where luxury meets tranquility to create an unparalleled escape. Nestled amidst breathtaking landscapes, our resort beckons you to a world of refined elegance and unmatched serenity. Immerse yourself in the harmonious blend of contemporary comfort and natural beauty, as Horizon Resort invites you to embark on an unforgettable journey of relaxation and rejuvenation. From stunning accommodations to world-class amenities, discover a horizon of possibilities for an idyllic retreat. Your extraordinary escape awaits at Horizon Resort.
Beyond the comfort of your abode, Horizon Resort unfolds a tapestry of amenities designed to elevate your stay. Immerse yourself in our pristine pools, rejuvenate your senses at our spa, or savor a culinary journey at our diverse restaurants. Our dedicated staff, committed to excellence, ensures that every moment of your stay is met with personalized attention and care.
For those seeking adventure, Horizon Resort is perfectly situated to explore the wonders of the surrounding area. From invigorating outdoor activities to cultural excursions, our concierge is ready to curate an experience tailored to your preferences
</p>
<div className='social-links'>
<FaInstagram />
<FaFacebookF />
<FaTwitter />
</div>



</div>


        </div>
    </div>
    
        <div className='sections'>
                 <div>
                 
                    <img  src={bell} alt='bell'/>
                    <h4>24/7 Front Desk</h4>
                    <p>At the front desk, our commitment to excellence extends around the clock with our 24/7 service, ensuring that your needs are met at any hour, day or night."</p>
                 </div>
                 <div>
                  
                    <img className='bar-pic' src={bar} alt='bar'/>
                    <h4>Restaurant Bar</h4>
                    <p>At the restaurant bar, the mixologist crafted artisanal cocktails, and the warm ambiance invited guests to unwind with friends over a diverse menu of mouthwatering appetizers  </p>
                 </div>
                 <div>
                   
                    <img className='car-pic' src={car} alt='bell'/>
                    <h4>Pick Up Service</h4>
                    <p>Experience convenience at its finest with our 24/7 pick-up service.we're here to make your dining experience effortlessly enjoyable, available at any time that suits your schedule</p>
                 </div>
                </div>
                </div>
  
  )
}

export default About