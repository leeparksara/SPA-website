import React from 'react'

function Search() {
  return (
    <div className='search-bar'>


      <div className='select'>
      <label>Check-In Date</label>
        <input type='date' placeholder='Select a date '/>
      </div>
      <div className='select'>
        <label> Check-Out Date</label>
        <input type='date' placeholder='Select A date'/>
      </div>
      <div className='select'>
      <label>Room</label>
        <select >
        <option>Select Room Type</option>
        <option>One Bedroom </option>
          <option>Delux Room</option>
          <option>Two Bedroom</option>
          <option>Three Bedroom</option>
    
        </select>
      </div>


      <div className='select'>
        <label>Costumer</label>
        <select>
          <option>1 Adult</option>
          <option>2 Adult</option>
          <option>3 Adult</option>
          <option>4 Adult</option>
          <option>5 Adult</option>
        </select>
      </div>
      <input className='submit' type='submit' value='Search'/>
    </div>
  )
}

export default Search