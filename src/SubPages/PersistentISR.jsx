import React from "react";
import "./PersistentISR.css";
import MultiMission from "./MultiMission";

const PersistentISR = () => {
  return (
    <>
    <section className="persistent-isr">
      <div className="persistent-isr-image">
        <img src="/your-image.jpg" alt="Persistent ISR Robotics" />
      </div>
      <div className="persistent-isr-content">
        <h2>
          Persistent ISR (Intelligence, <br /> Surveillance, &amp; Reconnaissance) Robotics
        </h2>
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
    </section>
    <MultiMission/>
    </>
  );
};

export default PersistentISR;
