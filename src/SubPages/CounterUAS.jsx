import React from "react";
import "./CounterUAS.css";
import PersistentISR from "./PersistentISR";
import image from "../assets/image4.jpg"

const CounterUAS = () => {
  return (
    <>
    <section className="counter-uas">
      <div className="counter-uas-content">
        <h2>Autonomous Counter-UAS Robotics</h2>
        <p>
          A fully integrated robotic system designed for dynamic air defense.
          This solution comprises autonomous sensing platforms that employ
          advanced perception algorithms to detect, classify, and track hostile
          UAS threats, even in complex environments. When a threat is identified,
          robotic effectors (such as high-precision interception drones or
          directed energy systems) are autonomously deployed and tasked via
          VAJRA OS to neutralize the target, ensuring rapid and effective
          airspace denial with minimal human intervention.
        </p>
      </div>
      <div className="counter-uas-image">
        <img src= {image} alt="Counter-UAS Robotics" />
      </div>
    </section>
    <PersistentISR/>
    </>
  );
};

export default CounterUAS;
