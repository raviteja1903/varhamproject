import React from "react";
import "./OurCapabilities.css";
import CounterUAS from "../SubPages/CounterUAS";

const OurCapabilities = () => {
  return (
    <>
    <section className="capabilities">
      <div className="overlay"></div>
      <div className="capabilities-content">
        <h1>
          A Unified Family <br /> of Smart Robots <br /> Powered by{" "}
          <span>VAJRA OS</span>
        </h1>
        <p>
          At the heart of our ecosystem is VAJRA OS, an AI-powered command and
          control platform. VAJRA fuses data from our network of robotic sensors
          and effectors into a single, intuitive operating picture, allowing
          human operators to command intelligent systems across any domain with
          unprecedented precision and scale. It’s the brain behind the brawn,
          enabling autonomous collaboration and dynamic mission execution.
        </p>
      </div>
    </section>
    <CounterUAS/>
    </>
  );
};

export default OurCapabilities;
