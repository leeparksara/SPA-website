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
    <div className='two-bedroom-component'>
    
      <div className={`discover ${showHiddenDiv ? 'show' : ''}`}>
        <h1>Two Bedroom Pool Villa</h1>
         
      </div>

      <IoIosArrowDown className='discover-arrow' onClick={handleArrowClick} />

      {showHiddenDiv && (
        <div className='hidden-div'>

        <div className='detail-section'>
     
        <h4  className='contact-animation'> Two Bedroom Pool Villa</h4>
        <div className='room-details'>
        <img className='room' src='https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='room'/>
            <p> Whether you're seeking a relaxing family vacation, a fun-filled getaway with friends, or simply a tranquil retreat from the hustle and bustle of everyday life, our Two Bedroom Villa provides the perfect setting for an unforgettable stay. </p>
        </div>
<div className='room-details'>
<p> Designed to provide ample space for families, groups, or those simply seeking extra room to spread out and relax, our Two Bedroom Villa offers a haven of tranquility amidst the beauty of our tropical surroundings.</p>
<img className='room' src='https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='room'/>
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


<div className='select'>
<label>Departure</label>
  <input type='date' placeholder='Select a date '/>
</div>
<div className='select'>
  <label> Arrival</label>
  <input type='date' placeholder='Select A date'/>
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

