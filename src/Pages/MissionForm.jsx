 
import React from "react";
import "./MissionForm.css";

const MissionForm = () => {
  return (
    <div className="mission-container">
      <h1>Serve a Mission Greater Than Yourself</h1>
      <p className="mission-description">
        We are assembling a team of India’s most brilliant engineers, mission
        experts, and builders. At Varham, you won’t be optimizing ad clicks or
        building disposable apps. You will be writing code, designing hardware,
        and building systems that directly contribute to the security and
        sovereignty of our nation. This work matters. We have created a culture
        that rewards speed, innovation, and ownership. If you are driven to
        solve real-world problems and want your work to have a tangible impact
        on national security, your mission starts here.
      </p>

      <form className="mission-form">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="name">
              Your Name <span className="required">*</span>
            </label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>

        <div className="input-column">
          <label htmlFor="comments">Any Comments <span className="required">*</span></label>
          <textarea id="comments" name="comments" rows="6"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default MissionForm;
