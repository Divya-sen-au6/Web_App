import React from "react";
import "./Customer.css";
function Customer() {
  return (
    <>
      <div className='Customer'>
      <div className='Customer1'>
      <i class='fas fa-arrow-circle-left'></i>
      <img className='img' src='images/img-5.jpg'></img>
      </div>

        <div className='Customer2'>
        <i class='fab fa-airbnb'> airbnb</i>
        <br />
        <br />
        <p>
          "Landkit is hands down the most useful front <br />
            end Bootstrap theme I've ever used.
          <br />
            wait to use it again for my next project."
          </p>
          <br />
          <br />
          <p className='name'>DAVE GAMACHE</p>
          <i class='fas fa-arrow-circle-right'></i>
        </div>
      </div>
    </>
  );
}
export default Customer;
