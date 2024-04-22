import React from 'react';
import { BsXLg } from "react-icons/bs";
const BookingForm = ({onClose}) => {
  return (
    <div className='popup-container' >
    <div className='close-popup' onClick={onClose}>
 

   
   <BsXLg  />
  
    </div>
   <div className='booking-content' >
    <section className='booking-section'>
    <div className='booking-text'>
    <div className='booking-title'>
    <h4>BOOK YOUR TABLE 
</h4>
    </div>
    
     <h5>Dine In The Horizon</h5>
    
      <p>Horizon offers gourmet dishes which celebrates the rich Swedish food. Our menu is carefully crafted to showcase the diverse flavors and culinary traditions of Sweden, from traditional classics to innovative fusion creations.</p>
      <p>Each dish is prepared with the finest locally sourced ingredients, handpicked by our talented chefs to ensure freshness and quality. Whether you're craving traditional Swedish meatballs, flavorful gravlax, or indulgent Swedish desserts, our menu has something to delight every palate.</p>

      <p>Come join us at Horizon and embark on a culinary journey through the rich flavors of Swedish cuisine. Our passion for food and commitment to excellence ensure that every meal with us is a celebration of the Swedish culinary tradition.</p>
    
     </div>
    <div className='booking'>
    <div className='bo' >

    <div  className='reserve'>
    <p>Reserve Your Table</p>
    </div>


    <div className='selection'>
    <div className='booking-info'>
    <label>Name</label>
    <input type='text'/>
    </div>
    <div className='booking-info'>
    <label>Email</label>
    <input type='email'/>
    </div>
    <div className='booking-info'>
    <label>Phone Number</label>
    <input type='number'/>
    </div>

    <div className='booking-date'>
  
    <input type='date' />
    <input type='time' />
    </div>
    
   
    <div className='select'> 
    <select className='option'>
            <option>1 Adult</option>
            <option>2 Adult</option>
            <option>3 Adult</option>
            <option>4 Adult</option>
        </select>
        </div>
        <div className='select'> 
    <select className='option'>
            <option>0 Children</option>
            <option>1 Children</option>
            <option>2 Children</option>
            <option>3 Children</option>
        </select>
   
        </div>
       
        <button className='booking-btn'>Confirm Booking</button>  
    
    </div>
   
    </div>
    

   </div>

    </section>
    </div>
   
    </div>
  );
};

export default BookingForm;