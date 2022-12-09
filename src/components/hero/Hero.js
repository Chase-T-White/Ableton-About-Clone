import React from "react";
import "./hero.css";

import Navbar from "../navigation/Navbar";
import Subnav from "../navigation/Subnav";

const Hero = () => {
  return (
    <section className='hero'>
      <Navbar />
      <Subnav />
      <div className='hero__img-container'>
        <h1 className='hero__title'>Ableton</h1>
      </div>
    </section>
  );
};

export default Hero;
