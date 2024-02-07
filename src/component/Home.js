import React from 'react';
import {  useLocation } from 'react-router-dom';


import SliderComponent from './SliderComponent';

import Search from './Search';
import video from './images/video.mp4';
import '../App.css';

function CoverImage() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
    
      <div className="background">
        {isHomePage && (
          <video
            src={video}
            type="video/mp4"
            autoPlay
            loop
            muted
            className="video-background"
          />
        )}
        {isHomePage && (
          <div className="text-overlay">
            <h1 className='hero-text'> RECONNECT WITH <br></br> NATURE</h1>
            <p className='hero-text2'>
              Horizon is all about treating yourself to fancy luxury <br></br> and soaking in beautiful vibes. It's like finding your <br></br> cozy hideaway, where you can kick back, relax, and <br></br>bask in the feel-good atmosphere
            </p>
            <div className='con4'>
              <Search />
            </div>
          </div>
        )}
        

      </div>
     

      {isHomePage && (
        <div className="sli">
          {' '}
          <SliderComponent />
        </div>
      )}
    
    </div>
  );
}

export default CoverImage;
