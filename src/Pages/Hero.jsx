import React from "react";
import "./Hero.css";
import logo from "../assets/video10.mp4"

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <h1>Building the Future of India’s Defence.</h1>
        <p>
          Varham Industries is a defence technology company rebooting the arsenal 
          of democracy. We build advanced, software-defined hardware to solve the 
          most critical national security challenges, putting cutting-edge autonomous 
          capabilities in the hands of the warfighter.
        </p>
      </div>
    </div>
  );
};

export default Hero;
