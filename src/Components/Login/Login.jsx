import React from 'react'
import '../Login/Login.css'
import Login2 from '../Login/login2.jpg'

function Login() {
  return (
    <div className='body'>
    <div class="main">
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid navigation">
              <a class="navbar-brand" href="#">
                <img src="logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                       SQL learning Platform Login
              </a>
            </div>
          </nav>
    </div>
    <div class="mainbody">
      <div class="logindetails">
        <h3>login</h3>
        <p>This is page for login the user details</p>
        <p class="singinemail">Please sing with your email</p>


    

        <form action="">

     
          <div class="form">
          
          <input type="email" placeholder="Email" class="input" /><br />
         
          <div class="password">
            <input type="password " placeholder="password" class="input" id="id_password" />
            <i class="fa fa-eye-slash" aria-hidden="true"  id="togglePassword" ></i><br />
           
          </div>
          
          <div class="rememberme">
           <input type="checkbox" />rememberme
            
           {/* <a href="#">forgotpassword?</a> */}
          </div>

          <button type="submit" class="login">login</button>
          <div class="create">
            <p>Not registered yet?</p>
            
            {/* <a href="registror2.html">create account</a> */}
          </div>
        </div>

          
        </form>

      </div>
      <div class="img">
        <img src= {Login2} alt="" height="520px" width="" />
      </div>
      
    </div>
    </div>
  )
}

export default Login