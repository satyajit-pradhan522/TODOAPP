import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center shadow p-4 rounded bg-white">
        {/* Left Side – Profile */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div
            className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
            style={{
              width: "130px",
              height: "130px",
              background: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
              color: "white",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            SP
          </div>

          <h4 className="mt-3 mb-1">Satyajit Pradhan</h4>
          <p className="text-muted">CSE Student • MERN Stack Developer</p>
        </div>

        {/* Right Side – About Content */}
        <div className="col-md-8">
          <h2 className="fw-bold">About This Todo App</h2>
          <p className="text-secondary">
            This Todo App is designed to help you stay organized and productive
            in your daily life. Built with the MERN stack (MongoDB, Express,
            React, Node.js), it offers a clean interface and smooth experience.
            You can create, update, and manage your tasks easily in one place.
          </p>

          <div className="row g-3 mt-2">
            <div className="col-6">
              <div className="p-3 border rounded bg-light">
                <h6 className="fw-semibold">User Friendly</h6>
                <p className="small text-muted mb-0">
                  Simple and clean interface.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="p-3 border rounded bg-light">
                <h6 className="fw-semibold">Fast</h6>
                <p className="small text-muted mb-0">
                  Backend optimized for quick response.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="p-3 border rounded bg-light">
                <h6 className="fw-semibold">Responsive</h6>
                <p className="small text-muted mb-0">
                  Works on mobile, tablet & desktop.
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="p-3 border rounded bg-light">
                <h6 className="fw-semibold">Extendable</h6>
                <p className="small text-muted mb-0">
                  Easily add features like reminders & filters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
