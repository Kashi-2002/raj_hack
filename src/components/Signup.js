import React, { useState, useRef } from 'react';
import './Signup.css';

function Signup() {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);

  
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const mobileRef = useRef(null);



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
  const handleMobileFocus = () => {
    setIsMobileFocused(true);
  };

  const handleMobileBlur = () => {
    setIsMobileFocused(passwordRef.current.value !== "");
  };

  // const [selectedOption, setSelectedOption] = useState('option1');



 
  const [Signup, setSignup]=useState({
    'password' : '',
    'email' : '',
    'mobile' : '',
    'selectedOption':'option1'
  })
  const handleInputChange = (event) => {
    console.log(event.target.name);
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



  // State for radio button
  

  


  return (
    <div className="loginpg">
    


      <img className="wave" src="wave.png" alt="Wave" />
      <div className="container">
        <div className="img">
          <img src="signup.svg" alt="Background" />
        </div>
        <div className="login-content">
          <form action="/">
            <img src="avatar.svg" alt="Avatar" />
            <h2 className="title">Welcome</h2>



            <div className='UserSel'>
        <label>
          <input
            type="radio"
            value="option1"
            checked={Signup.selectedOption === 'user'}
            onChange={handleInputChange}
            name='selectedOption'
          />
           Complaintant
        </label>

        <label>
          <input
            type="radio"
            value="option2"
            checked={Signup.selectedOption === 'police'}
            onChange={handleInputChange}
            name='selectedOption'
          />
          Police Official
        </label>

        <label>
          <input
            type="radio"
            value="option2"
            checked={Signup.selectedOption === 'bank'}
            onChange={handleInputChange}
            name='selectedOption'
          />
          Bank Official
        </label>

      </div>


            <div className={`input-div one ${isUsernameFocused ? 'focus' : ''}`}>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Emailadress</h5>
                <input
                  type="text"
                  className="input"
                  ref={usernameRef}
                  onFocus={handleUsernameFocus}
                  onBlur={handleUsernameBlur}
                  value={Signup.email}
                  onChange={handleInputChange}
                  name='email'
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
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  value={Signup.password}
                  onChange={handleInputChange}
                  name='password'
                />
              </div>
            </div>
          

            <div className={`input-div pass ${isMobileFocused ? 'focus' : ''}`}>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Mobile Number</h5>
                <input
                  // type=""
                  className="input"
                  name='mobile'
                  ref={passwordRef}
                  onFocus={handleMobileFocus}
                  onBlur={handleMobileBlur}
                  value={Signup.mobile}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <input type="submit" className="btn" value="Signup" onClick={handleSubmit}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
