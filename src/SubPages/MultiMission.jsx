import React from "react";
import "./MultiMission.css";
import Networked from "./Networked";
import image from "../assets/image01.jpg" 
 

const MultiMission = () => {
  return (
    <>
    <section className="multi-mission">
      <div className="multi-mission-content">
        <h2>
          Multi-Mission <br /> Capabilities
        </h2>
        <p>
          Our multi-mission systems are designed with versatility in mind,
          ensuring adaptability across various defense and civilian applications.
          From reconnaissance and surveillance to autonomous logistics and combat
          support, these platforms provide modular configurations that can be
          quickly re-tasked. Built on robust AI-driven autonomy, they deliver
          reliability, precision, and mission success in complex environments.
        </p>
      </div>

      <div className="multi-mission-image">
        <img src={image} alt="Multi Mission Vehicle" />
      </div>
    </section>
    <Networked/>
    </>
  );
};

export default MultiMission;
