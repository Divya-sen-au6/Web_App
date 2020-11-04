import React from "react";
import "./BuyNow.css";
function BuyNow() {
  return (
    <>
      <div className='Buy'>
        <div className='buy1Parent'>
          <div className='Buy1'>
            <h4>STANDRED</h4>
            <h1>$ 29 / mo</h1>
            <p>per seat</p>

            <ul
              style={{
                listStyle: "none",
                textAlign: "left",
                padding: "10px 55px",
                lineHeight: "2rem",
              }}>
              <li>Rich, responsive landing pages</li>
              <li>100+ styled components</li>
              <li>Flexible, simple license</li>
              <li>Speedy build tooling </li>
              <li>6 months free support included</li>
            </ul>

            <button
              style={{
                height: "40px",
                width: "100%",
                // padding: "0px",
                margin: "54px 0px",
              }}>
              Get it now
            </button>
          </div>

          <div className='Buy2'>
            <h4>ENTERPRISE</h4>

            <p className='pForBuy2'>
              We offer variable pricing with discount for large orginations. Get
              in pouch with us and we'll figure out something that works for
              everyone.
            </p>
            <button
              style={{
                height: "40px",
                width: "100%",
                // padding: "0px",
                margin: "54px 0px",
              }}>
              Get it now
            </button>
          </div>

          {/* ======================================================================================== */}

          <div className='Buy3'>
            <h4> ? Can i use Landkit for my click ?</h4>
            <p style={{ marginLeft: "15px" }}>
              Absolutely.The Bootstrap Themes license allows you to Build a
              website for personal use or for a client.
            </p>

            <br />
            <br />

            <h4> ? Do i get free updates ?</h4>
            <p>
              Yes. We update all of our themes with each Bootstrap update, plue
              are constantly adding new components, pages, and features to our
              themes.
            </p>
          </div>

          <div className='Buy4'>
            <h4> ? Is there a money back gurantee ?</h4>
            <p style={{ marginLeft: "15px" }}>
              Yup ! Bootstrap Themes come with a satisfaction gurantee. Submit a
              return and get your money back.
            </p>

            <br />
            <br />

            <h4> ? Does it work with Rails? React? laravel?</h4>
            <p>
              Yes. Landkit has basic Css / Js Files you can include. if yu want
              to enable deeper customization, you can integrate it into your
              assets pipeline or build processes.
            </p>
          </div>

          <div className='Buy5'>
            <h5>GET STARTED</h5>
            <h2>Get Landkit and Save your time. </h2>
            <br />
            <br />
            <p>
              Stop wasting time trying to do it the "right way" and build a site
              from scratch <br /> Landkit is faster , easier , and you still
              have complete control.
            </p>
            <button style={{ width: "7rem", height: "3rem" }}>
              Buy It Now <i fas fa-arrow></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BuyNow;
