import React from "react";
import "./OurCapabilities.css";
import CounterUAS from "../SubPages/CounterUAS";
import video from "../assets/video9.mp4"

const OurCapabilities = () => {
  return (
    <>
      <section className="capabilities">
        {/* Background Video */}
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="overlay"></div>

        {/* Content */}
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
      <CounterUAS />
    </>
  );
};

export default OurCapabilities;
