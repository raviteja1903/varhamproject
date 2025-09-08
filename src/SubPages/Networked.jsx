import React from "react";
import "./Networked.css";
import image from "../assets/image3.jpg";

const Networked = () => {
  return (
    <section className="networked-main">
      <div className="networked-image">
        <img src={image} alt="Networked Combat Systems" />
      </div>

      <div className="networked-content">
        <h2>Networked Combat Systems</h2>
        <p>
          Autonomous platforms that seamlessly interconnect across land, air,
          sea, and cyber domains. These systems don’t just operate in isolation
          – they form a coordinated, distributed force capable of adapting to
          dynamic battle conditions.
        </p>
        <p>
          By leveraging AI-driven situational awareness and real-time data
          exchange, networked combat systems ensure rapid decision-making,
          precise coordination, and overwhelming tactical advantage across
          multiple domains simultaneously.
        </p>
      </div>
    </section>
  );
};

export default Networked;
