import React from "react";
import "../../App.css";
//import Cards from '../Cards';
import Business from "../Business/Business";
import Login from "../Login/Login";
import HeroSection from "../LandingPage";
import BuyNow from "../BuyNow/BuyNow";
import Theme from "../Theme/Theme";
import Customer from "../Customer/Customer";
import Design from "../Design/Design";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Business />
      <Login />
      <Theme />
      <Customer />
      <Design />
      <BuyNow />
      <Footer />
    </>
  );
}

export default Home;
