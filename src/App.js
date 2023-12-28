

import React, { useState, useRef } from 'react';
// import './App.css';
import { Link } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import User from './User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Police from './components/police/Police';
import Navbar from './components/Navbar';
import ComplaintPage from './components/police/ComplaintPage';
import PoliceProfile from './components/police/PoliceProfile';
import TrackComplaint from './components/User/TrackComplaint';
import AllFiledComplaints from './components/User/AllFiledComplaints';


function App() {
return(
  // <Login/>
  <Router>
    <Routes>
    {/* <Route path="/" exact element={<Login />} /> */}
    {/* <Route path="/signup" element={<Signup />} /> */}
    {/* <Route path="/user" element={<User />} /> */}
    <Route path='/police' element={<Police/>} />
    <Route path='/police/profile' element={
      <>
      <Navbar/>
      <PoliceProfile/>
      </>
    } />
    <Route path='/police/complaint/:id' element={
      <>
      <Navbar/>
      <ComplaintPage/>
      </>
    } />

    <Route path='/user/track-complaint/:id' element={
      <>
      <Navbar/>
      <TrackComplaint/>
      </>
    } />
    <Route path='/user/all-complaints' element={
      <>
      <Navbar/>
      <AllFiledComplaints/>
      </>
    } />
    {/* <Route path="/signup" exact component={Login} /> */}
    </Routes>
  </Router>


);
}

export default App;
