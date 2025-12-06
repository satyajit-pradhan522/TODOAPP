import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper py-5">
      <div className="container">
        <div className="row align-items-center shadow about-card p-4 p-md-5 rounded bg-white">
          {/* Left Profile Section */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="profile-circle mx-auto mb-3">SP</div>

            <h4 className="user-name mb-1">Satyajit Pradhan</h4>
            <p className="text-muted">CSE Student • MERN Stack Developer</p>
          </div>

          {/* About Section */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">About This Todo App</h2>
            <p className="text-secondary about-text">
              This Todo App helps you stay organized and productive every day.
              Built using the MERN stack (MongoDB, Express, React, Node.js), it
              offers a smooth and modern experience to create, update, and
              manage tasks efficiently.
            </p>

            <div className="row g-3 mt-3">
              <div className="col-6">
                <div className="feature-box p-3 rounded shadow-sm">
                  <h6 className="fw-semibold mb-1">User Friendly</h6>
                  <p className="small text-muted mb-0">
                    Simple clean interface.
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="feature-box p-3 rounded shadow-sm">
                  <h6 className="fw-semibold mb-1">Fast</h6>
                  <p className="small text-muted mb-0">
                    Optimized performance.
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="feature-box p-3 rounded shadow-sm">
                  <h6 className="fw-semibold mb-1">Responsive</h6>
                  <p className="small text-muted mb-0">
                    Perfect on all screen sizes.
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="feature-box p-3 rounded shadow-sm">
                  <h6 className="fw-semibold mb-1">Extendable</h6>
                  <p className="small text-muted mb-0">
                    Add reminders, categories & more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
