import React, { useState, useRef } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
 




  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(usernameRef.current.value !== "");
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(passwordRef.current.value !== "");
  };


  const [Signup, setSignup]=useState({
    'password' : '',
    'username' : ''
  })
  const handleInputChange = (event) => {
    // console.log(event.target.name);
    setSignup((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming your API endpoint is "https://api.example.com/submit"
    const apiUrl = 'https://api.example.com/submit';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(Signup),
      });

      if (response.ok) {
        // API call was successful
        console.log('Data submitted successfully');
        // alert('Login Succe')
        // Handle errors
        // console.error('Error submitting data to API');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <div className="loginpg">
      <img className="wave" src="wave.png" alt="Wave" />
      <div className="container">
        <div className="img">
          <img src="bg.svg" alt="Background" />
        </div>
        <div className="login-content">
          <form action="/">
            <img src="avatar.svg" alt="Avatar" />
            <h2 className="title">Welcome</h2>
            <div className={`input-div one ${isUsernameFocused ? 'focus' : ''}`}>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  name='username'
                  ref={usernameRef}
                  onFocus={handleUsernameFocus}
                  onBlur={handleUsernameBlur}
                  value={Signup.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={`input-div pass ${isPasswordFocused ? 'focus' : ''}`}>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  ref={passwordRef}
                  name='password'
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  value={Signup.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <Link to='/Signup'>Already A User?</Link>
            <input type="submit" className="btn" value="Login" onClick={handleSubmit}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
