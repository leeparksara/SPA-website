
import React, {useState, useEffect} from 'react'
import bell from './images/bell.png'
import bar from './images/bar.png'
import car from './images/car.png'
import wine from './images/wine.webp'
import pool from './images/pool.webp'
import food from './images/food.webp'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';


function Discover() {const [showHiddenDiv, setShowHiddenDiv] = useState(false);
const [adults, setAdults] = useState(1);
const [childd, setChildd] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the threshold value based on when you want the hidden div to appear
    if (scrollY > 15) {
      setShowHiddenDiv(true);
    } else {
      setShowHiddenDiv(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    // Scroll down to display the hidden div
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth', // Add smooth scrolling effect
    });
  }; 


     //Increment and Decrement for child selection 
     const handleChildd = () => {
        setChildd(childd + 1);
    }
      
    const handleChilddDec = () => {
        if (childd > 1) {
            setChildd(childd - 1)
        }
    }



  // for increment and decreament of adults
  const handleIncrement = () => {
    setAdults(adults +1);
  }

  const handleDecrement =() => {
    if (adults > 1) {
        setAdults(adults -1);
    }
  }



  return (
   <>
    <div className='about-component'>
    
      <div className={`discover ${showHiddenDiv ? 'show' : ''}`}>
        <h1>About Us</h1>
         
      </div>

      <IoIosArrowDown className='discover-arrow' onClick={handleArrowClick} />

      {showHiddenDiv && (
       
         <><div className='ab'>
                 <div className='about-intro'>

                    <div className='about-text'>
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

                    <div className='about-images'>
                <img src={wine} alt='wine' />
                <img src={pool} alt=' pool'/>
                <img src={food} alt='food' />
                  
                 </div>

                 </div>

              </div>
              
              <div className='sections'>
                    <div>

                       <img src={bell} alt='bell' />
                       <h4>24/7 Front Desk</h4>
                       <p>At the front desk, our commitment to excellence extends around the clock with our 24/7 service, ensuring that your needs are met at any hour, day or night."</p>
                    </div>


                    <div>

                       <img className='bar-pic' src={bar} alt='bar' />
                       <h4>Restaurant Bar</h4>
                       <p>At the restaurant bar, the mixologist crafted artisanal cocktails, and the warm ambiance invited guests to unwind with friends over a diverse menu of mouthwatering appetizers  </p>
                    </div>

                    <div>

                       <img className='car-pic' src={car} alt='bell' />
                       <h4>Pick Up Service</h4>
                       <p>Experience convenience at its finest with our 24/7 pick-up service.we're here to make your dining experience effortlessly enjoyable, available at any time that suits your schedule</p>
                    </div>
                 </div></>
                
                
      )}
     
     {showHiddenDiv && (
      <div className='bar'>

<div className='second-search-bar'>


<div className='select-in'>
<label>Departure</label>
<input className='select-input' type='date' placeholder='Select a date '/>
</div>
<div className='select-in'>
<label> Arrival</label>
<input className='select-input' type='date' placeholder='Select A date'/>
</div>



<div className='select'>
<label>Adult</label>
<div className='quantity-input'>

<button  id='decreament' onClick={handleDecrement}>-</button>
<input className='adult-input' type='text' value={adults} readOnly/>
<button id='increment' onClick={handleIncrement}>+</button>
</div>
</div>
<div className='select'>
<label>Child</label>
<div className='quantity-input'>
<button id='decreament' onClick={handleChilddDec}>-</button>
<input className='adult-input' type='text' value={childd} readOnly/>
<button id='increment' onClick={ handleChildd }>+</button>
</div>
</div>

</div>
<input className='second-submit' type='submit' value='Check Availibilty'/>
</div>
     )}
    </div>
    </>
  );
}

export default Discover;

