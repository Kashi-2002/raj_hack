

import React, { useState, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
return(
  // <Login/>
  <Router>
    <Routes>
    <Route path="/" exact element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/user" element={<User />} />
    {/* <Route path="/signup" exact component={Login} /> */}
    </Routes>
  </Router>


);
}

export default App;
