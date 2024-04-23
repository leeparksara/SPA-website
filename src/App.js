import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Discover from './component/Discover';
import About from './component/About';
import Contact from './component/Contact';
import OutdoorSpa from './component/OutdoorSpa';
import Table from './component/Table'
import Footer from './component/Footer';
import NavBar from './component/NavBar';
import Search from './component/Search';
import Delux from './component/Delux'
import OneBedRoom from './component/OneBedRoom';
import TwoBedRoom from './component/TwoBedRoom';
function App() {
  return (
    <div className="app-container"> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/outdoorspa" element={<OutdoorSpa />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
<Route path='/table' element={<Table/>} />
<Route path='/search' element={<Search/>} />

        <Route path="/discover" element={<Discover />} />
        <Route path="/delux" element={<Delux />} />
     
<Route path="/one-bedroom" element={<OneBedRoom />} />
<Route path="/two-bedroom" element={<TwoBedRoom />} />
      </Routes>
      <div className="footer-con">
        <Footer />
      </div>
    </div>
  );
}

export default App;
