import React from "react";
import "./Login.css";
function Login() {
  return (
    <>
      <div className='Login'>
        <div className='Login1'>
          <img className='img1' src='images/img-8.jpg'></img>

          <input type='text' placeholder='username'></input>
          <input type='text' placeholder='Email'></input>
          <input type='text' placeholder='password'></input>

          <button type='button' class='btn'>
            Download a Sample
          </button>
        </div>

        <div className='Login2'>
          <h3>The most useful resource</h3>
          <strong className='Strong1'>ever created for dev|</strong>
          <br />
          <br />
          <p>using Landkit to build your site means never worrying</p>
          <p>about designing another page or cross browser</p>
          <p>compatibility.Our ever-growing library of components</p>
          <p>and pre-designed layouts will make your life easier.</p>
        </div>
      </div>
    </>
  );
}
export default Login;
