import React, { useState, useEffect } from 'react';
import outdoor from '../outdoor.json';
import { IoIosArrowDown } from 'react-icons/io';

const OutdoorSpa = () => {
//Usestate to show the div when ser scrolls down
    const [showHiddenDiv, setShowHiddenDiv] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? outdoor.length - 1 : prevIndex - 1));
    
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === outdoor.length - 1 ? 0 : prevIndex + 1));
  };

  const handleScroll = () =>{
    const scrolly = window.scrollY; 
    if (scrolly > 15) {
        setShowHiddenDiv(true)
;    } else{
    setShowHiddenDiv(false)
}
  }

  //
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollHandleArrowClick = () =>{
window.scrollTo({
    top:window.innerHeight,
    behavior: 'smooth'
});


  } 
   return (
    <div className='spa-wrapp'>
      <h1 className='chakra'> Chakra Spa</h1>
      <IoIosArrowDown onClick={scrollHandleArrowClick} className='discover-arrow' />


      {showHiddenDiv && (
        <div className='image-slider'>
      <div className='text-container' >
      <h2 className='spa-animation'> Welcome to our spa</h2>
  
      <p className='spa-text'>As you step into one of Zen Sanctuary's exclusive double treatment sanctuaries, embark on a voyage towards ultimate tranquility. This haven of wellness is committed to providing a serene escape and revitalization, offering an array of distinctive treatments, from calming Thai massages to therapeutic aromatherapy and invigorating body exfoliation rituals. Your sojourn into bliss awaits at Zen Sanctuary, where each moment is dedicated to your complete relaxation and rejuvenation.</p>
      </div>

 
   <div className='slides' >
   <div className='slider'  >
    <img src={outdoor[currentIndex].pic} alt={outdoor[currentIndex].title} />
        <h3>{outdoor[currentIndex].title}</h3>
        <p>{outdoor[currentIndex].para}</p>
    </div>
 <div className='buttons'>

 <button
                onClick={handlePrev}
        
              ></button>
        <button onClick={handleNext}></button>
 </div>
   </div>
   

      </div>
    
    )}
      
    </div>
  );
};

export default OutdoorSpa;
