import React, { useState } from "react";
import "./MissionForm.css";

const MissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✅");
    console.log(formData);
  };

  return (
    <section className="mission-form">
      <div className="overlay">
        <div className="form-content">
          <h1>Serve a Mission Greater Than Yourself</h1>
          <p>
            We are assembling a team of India’s most brilliant engineers, mission experts, 
            and builders. At Varham, you won’t be optimizing ad clicks or building disposable apps. 
            You will be writing code, designing hardware, and building systems that directly contribute 
            to the security and sovereignty of our nation. 
            <br />
            This work matters. We have created a culture that rewards speed, innovation, and ownership. 
            If you are driven to solve real-world problems and want your work to have a tangible impact 
            on national security, your mission starts here.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name <span>*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email <span>*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Any Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MissionForm;
