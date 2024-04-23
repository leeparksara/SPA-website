import React from 'react'
import styled from 'styled-components';
function Search() {
  return (
    <SearchBar className='search-bar'>


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
    </SearchBar>
  )
}

export default Search

const SearchBar= styled.div`
   

  width: 90%;
  height: 180px;
  background-color: #ebebeb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
 

.select{
  display: flex;
  flex-direction: column;
 width: 200px;
row-gap: 10px;
}

.submit{
  background-color:#2da6c4;
  border: none;
  color: #fff;
  width: 140px;
  height: 50px;
  border-radius: 5px;
}
@media (max-width: 768px) {
      
       
  width: 90%;
  height: 440px;
padding-bottom:40px;
padding-top:20px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
text-align:left;
.submit{
 
  width: 250px;
  height: 45px;
  border-radius: 5px;
}
    }
   

`

