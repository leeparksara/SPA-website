import React from 'react'
import { useEffect, useState } from 'react'
//import Booking from './Booking.tsx'
//import outdoor from '../outdoor.json'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io';


// Simple contact form is created with html and css
// Using local json file again to fetch the titles when user wants to select a spa type during booking
function Contact() {
   
    const [showHiddenDiv, setShowHiddenDiv] = useState(false);
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
       
    return (
        <Wrap className='wrap'>
        <h1> Contact Us </h1>
        <IoIosArrowDown className='discover-arrow' onClick={handleArrowClick} />
            {showHiddenDiv && (
                <div className='contact-container'>
                <div>
                <h2 className='contact-animation'> Get In Touch</h2>
                </div>
               
             
                <div className="con">
                <div className='contactt'>

                <h4>Horizon</h4>
                <p>Gamla Tyresovagen 326. <br></br> Enskededalen
Stockholm, Sweden 0012

</p>
<p>010-3456-776</p>
                </div>
         
                    <form className="form-container">
                   
                        <div className="flex-container">
                            <label>Name</label>
                            <input type="text" />
                           
                      
                        </div>

                        <div className="flex-container">
                            <label>Email Address</label>
                            <input type="email"  />
                        </div>

                        <div className="flex-container">
                            <input type="date" placeholder="Date & Time" />

                           
                        </div>
                        <div className="flex-container">
                        <label>Reason For Contact</label>
                            <select  >

                                <option>Make a reservation</option>
                                <option>Request a pick up service</option>
                                <option>General question</option>
                            </select>
                        </div>

                        <div className="form-sub">
                            <input  type="submit" value="Send"/>
                        </div>
                    </form>
                    
                </div>
                <div className='hot-spot'>
                    <h3>Hot spots around the resort</h3>
                    <ul>
                        <li>King River - 5.2 Km (15 min)</li>
 <li>Stockholm Muesum 3.2 Km (10 min)</li>
                        <li>The Monkey Forest - 14.4 Km (35 min) </li>
                    </ul>
                </div>
                </div>
            )}
           
        </Wrap>
    )
}

export default Contact

const Wrap = styled('form')`
    form {
        padding: 30px;
        
        background-color:transparent;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
width:400px;
        padding: 2%;
        column-gap: 15px;
        text-align:left;
        
    }
    input, select{
        border-top:none;
        border-left:none;
        border-right:none;
        border-bottom:1px solid #fff;
        background-color:transparent;
      color:#fff;
    }
    option{
        color:#000;
    }
.form-container{
    text-align:center;
    color:#fff;
    margin-top: 5%;
  
}
    input {
        padding: 3px;
    }
    select {
        padding: 6px;
    }

    .form-sub {
        text-align: center;
        margin-top: 10px;
    }
    .form-sub input {
        
        border: none;
        border-radius: 3px;
        width: 80px;
        font-size: large;
        padding: 10px;
        color: white;
        margin-left:180px;
    }
    
    h1{
        color:#fff;
      margin-top:15%;

    }
`
