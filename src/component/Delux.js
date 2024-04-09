import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { GrGroup } from "react-icons/gr";
import { PiCubeThin } from "react-icons/pi";

import { PiImageThin } from "react-icons/pi";

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
    // Scroll down to reveal the hidden div
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
    <div className='delux-component'>
    
      <div className={`discover ${showHiddenDiv ? 'show' : ''}`}>
        <h1>One Bedroom Delux Villa</h1>
         
      </div>

      <IoIosArrowDown className='discover-arrow' onClick={handleArrowClick} />

      {showHiddenDiv && (
        <div className='hidden-div'>

        <div className='detail-section'>
     
        <h4  className='contact-animation'> One Bedroom Delux Villa</h4>
        <div className='room-details'>
        <img className='room' src='https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='room'/>
            <p> Whether you're seeking a romantic getaway or a well-deserved escape, our Delux Room Villa offers an unparalleled experience that promises to exceed your every expectation. Treat yourself to luxury redefined and embark on a journey of unparalleled indulgence at our esteemed resort </p>
        </div>
<div id="room-details-reverse" className='room-details'>
<p> Pamper yourself in the lavish ensuite bathroom, complete with a luxurious bathtub and rejuvenating rain shower, where you can indulge in moments of relaxation and rejuvenation</p>
<img className='room' src='https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='room'/>
</div>


        </div>

        </div>
        
      )}
     {showHiddenDiv && (
        <div className='room-features'>
<h2>Villa Features</h2>
<div className='featuers'>
    <div className='features-icon'>
    <div>
 <PiCubeThin />
 <p> 140 sqm</p>
 </div>
    <div>
    <GrGroup  /> 
    <p>2 Adult + 2 Children</p>
    </div>
 <div>
 <PiImageThin />
 <p> Ocean View</p>
 </div>

   

    </div>

    <div className='features-list'>
    <ul>
        <li>Accommodate up to 2 Adults with 2 Children</li>
        <li>Private garden featuring a 16.5 sqm outdoor heated pool.</li>
        <li> Daily housekeeping and evening turndown service.</li>
        <li>Wireless internet access.</li>
        <li> 24-hour service</li>
        <li> Individually controlled air-conditioning.</li>
        <li>Coffee and tea making facilities.</li>
        <li>Luxurious bathroom amenities.</li>
        <li>Safety deposit box.</li>
    </ul>
</div>
</div>

      </div>

     
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
  );
}

export default Discover;


