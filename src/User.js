
import React, { useState, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
// import User from './User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function User() {
    return (
        <Navbar/>
    );
}


export default User;