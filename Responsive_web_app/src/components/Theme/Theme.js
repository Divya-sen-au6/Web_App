import React from "react";
import "./Theme.css";
function Theme() {
  return (
    <>
      <div className='Theme'>
        <div className='Theme1'>
          <h1>
            We have alot of Experience <br />
            <strong className='strong'>Building Bootstrap Themes</strong>.
          </h1>
          <br />
          <p className='Ptag1'>
            We've built well over a dozen Bootstrap themes and sold tens of
            thousands of copies.
            <br />
            <br />
            <h3 className='h3tag'>
              <i class='fas fa-sync-alt'></i> Bootstrap users since the
              beginning
            </h3>
            <p className='Ptag2'>
              we've been developing with bootstrap since it was publicly
              releases in 2011
            </p>
            <br />
          </p>

          <h3 className='h3tag'>
            <i className='fas fa-code'></i> Deep understanding of Bootsrap
          </h3>
          <p className='Ptag2'>
            we've watched Bootstrap grow up over the years and
            <br />
            understand it better than atmost anyone.
          </p>
        </div>

        <div className='Theme2'>
          <img className='image' src='images/img-9.jpg'></img>
        </div>
      </div>
      <div className='Theme4'>
        <h3>Our Customers are our bigest fans.</h3>
        <br />
        <p>
          We don't like to brag, but we don't mind letting our customers do it
          for us.
          <br />
          Here are a few nice things folks have said about our themes over the
          years.
        </p>
        <br />
      </div>
    </>
  );
}
export default Theme;
