import React from 'react'
// import './Login.css'

function Login() {
  return (
    <div>
  <div class="wrapper">
    <div class="container main">
        <div class="row">
            {/* <div class="col-md-6 side-image"> */}
                                    
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" class="col-md-6"/>
                
            {/* </div> */}
            <div class="col-md-6 right">
                
                <div class="input-box">
                   
                   <header>Create account</header>
                   <div class="input-field">
                        <input type="text" class="input" id="email" required="" autocomplete="off"/>
                        <label for="email">Email</label> 
                    </div> 
                   <div class="input-field">
                        <input type="password" class="input" id="pass" required=""/>
                        <label for="pass">Password</label>
                    </div> 
                   <div class="input-field">
                        
                        <input type="submit" class="submit" value="Sign Up"/>
                   </div> 
                   <div class="signin">
                    <span>Already have an account? <a href="#">Log in here</a></span>
                   </div>
                </div>  
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Login