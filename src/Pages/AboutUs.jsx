import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="hero-container01">
      <div className="hero-overlay01">
        <h1 className="hero-title01">
          Engineering for <br /> <span>National Security</span>
        </h1>
        <p className="hero-text01">
          Varham Industries was founded to radically transform India's defence
          capabilities. Traditional defence procurement is too slow, too
          expensive, and too siloed for the modern era. We operate differently.
          By combining the agility and innovation of a technology startup with
          the discipline of a mission-focused prime, we are building the future
          of deterrence.
          <br />{" "}
          <span>
            Our approach fuses advanced hardware with an AI-powered software
            backbone, creating integrated systems that deliver an asymmetric
            advantage. We don't wait for requirements; we anticipate threats and
            proactively develop solutions. We are a private partner committed to
            building India's sovereign defence capability, ensuring the Indian
            Armed Forces have the technology needed to deter and win.{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
