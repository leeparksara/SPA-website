import React from 'react'


interface GreetingProps{
    heading: string;
    text: string;
    cancel: string;
    confirm: string;
}
function Booking(props: GreetingProps) {
  return (
      <div className='booking-modal'>
          <div id='modal'>
          <div className='modal-text'>
              <h2 >{ props.heading}</h2>
              <p>{props.text}</p>


              </div>

          <hr />
          <div className='modal-buttons'>


             <button className='cancel-btn'>{props.cancel} </button>
                  <button className='confirm-btn'>{props.confirm}</button>
                  </div>
          </div>

                      




      </div>
  )
}

export default Booking
