import React from "react";
import "../App.css";
import { Button } from "./Button/Button";
import "./LandingPage.css";

function HeroSection() {
  return (
    <div className='Landing-page'>
      <div className='hero-container'>
        <h1>
          Welcome to <strong className='strong'>Landkit</strong>.
          <br /> Develop anything.
        </h1>
        <br />
        <p className='Ptag'>
          Build a beautiful,modern website with flexible
          <br />
          Bootstrap components built from scratch.
        </p>

        <div className='hero-btns'>
          <button className='btns'>
            View all pages <i className='fas fa-arrow-right'></i>
          </button>
          <button className='btns btn22'>Documentation</button>
        </div>
      </div>
      <div className='hero-container2'>
        <img src='images/img-4.jpg'></img>
      </div>
    </div>
  );
}

export default HeroSection;
