import React from "react";
import "./MissionVisionValues.css";
import video from "../assets/video88.mp4"

const MissionVisionValues = () => {
  return (
    <div className="mv-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={video}type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="mv-overlay">
        {/* Mission Section */}
        <section className="mv-section mission">
          <div className="content">
            <h2>Our Mission</h2>
            <p>
              To restore the nation’s technological overmatch by creating and
              deploying advanced autonomous systems. We exist to place superior
              capabilities in the hands of the warfighter, faster and more
              affordably than ever before.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mv-section vision">
          <div className="content">
            <h2>Our Vision</h2>
            <p>
              A future where India’s sovereignty is secured by a decisive
              technological edge. We envision a world where our armed forces can
              deter conflict and achieve their objectives with intelligent,
              networked, and autonomous technology that is always one step ahead
              of the adversary.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mv-section values">
          <div className="content">
            <h2>Our Core Values</h2>
            <ul>
              <li>
                <strong>Mission First:</strong> We are relentlessly focused on the
                needs of the warfighter and the security of the nation.
              </li>
              <li>
                <strong>Act with Urgency:</strong> We understand that time is the
                most critical resource. We build, test, and deploy at mission
                speed.
              </li>
              <li>
                <strong>Own the Outcome:</strong> We take full responsibility for
                our technology’s performance, from the first line of code to the
                last mile of the battlefield.
              </li>
              <li>
                <strong>Calculated Boldness:</strong> We challenge convention and
                take intelligent risks to create revolutionary capabilities.
              </li>
              <li>
                <strong>Meritocracy of Ideas:</strong> The best solution wins,
                regardless of where it comes from. We foster a culture of open
                debate and intellectual honesty.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionVisionValues;
