import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper py-5">
      {/* Hero Section */}
      <div className="container text-center">
        <div className="hero-box shadow-lg p-5 rounded-4 bg-white">
          <h1 className="fw-bold display-5">Organize Your Day Smarter</h1>
          <p className="mt-3 text-secondary fs-5">
            A clean, fast, and simple Todo App to keep your life on track.
          </p>

          <button
            className="btn hero-btn btn-lg mt-4 px-5"
            onClick={() => navigate("/todo")}
          >
            Start Creating Tasks
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature-card p-4 rounded text-center h-100 shadow-sm">
              <h4 className="fw-bold">✨ Easy To Use</h4>
              <p className="text-muted mt-2">
                Add, edit, and delete tasks with a clean interface.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card p-4 rounded text-center h-100 shadow-sm">
              <h4 className="fw-bold">📌 Manage Tasks</h4>
              <p className="text-muted mt-2">
                Organize your day and boost your productivity.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card p-4 rounded text-center h-100 shadow-sm">
              <h4 className="fw-bold">📱 Fully Responsive</h4>
              <p className="text-muted mt-2">
                Works smoothly on mobile, tablet, and desktop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
