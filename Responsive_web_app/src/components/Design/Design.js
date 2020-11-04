import React from "react";
import "./Design.css";
function Design() {
  return (
    <>
      <div className='Design'>
        <div className='Design1'>
          <h1>
            Stay focused on your business.
            <br />
            <strong className='strong'>Let us handle the design</strong>.
          </h1>
          <br />
          <h3 className='ptag2'>
            You have a business to run.Stop working about cross-
            <br />
            browser bugs, designing new pages,keeping your
            <br />
            Components up to date.Let us do that for you.
            <br />
          </h3>
          <br />

          <div>
            <ul className='List'>
              <li className='Li'>
                100%
                <br />
                Satisfaction
              </li>
              <li className='Li'>
                24/7 <br />
                Suport
              </li>
              <li className='Li'>
                100k+ <br /> Sales
              </li>
            </ul>
          </div>
        </div>

        <div className='Design2'>
          <img className='image1' src='images/img-22.jpg'></img>
        </div>
      </div>
      <div className='Design4'>
        <h3>Fair, simple pricing for all</h3>
        <p className='ptag3'>
          All types of business need access to development resources,
          <br />
          So we give you the option to decide how much you need to use.
          <br /> Annual
          <i class='fas fa-toggle-on'></i> Monthly
        </p>
        <br />
      </div>
    </>
  );
}
export default Design;
