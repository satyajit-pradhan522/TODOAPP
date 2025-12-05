import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="container my-5">
        {/* Hero Section */}
        <div className="p-5 rounded-4 shadow bg-white text-center">
          <h1 className="fw-bold">Welcome to My Todo App</h1>
          <p className="mt-3 text-secondary fs-5">
            Stay organized, focused, and productive every single day. Manage
            your tasks easily with a clean and simple interface.
          </p>

          <button
            className="home-btn btn-lg mt-3"
            onClick={() => navigate("/todo")}
          >
            Start Creating Tasks
          </button>
        </div>

        {/* Features Section */}
        <div className="row text-center mt-5 g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded bg-light shadow-sm h-100">
              <h4 className="fw-semibold">Easy To Use</h4>
              <p className="text-muted">
                Add, edit, or delete tasks with just a click.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded bg-light shadow-sm h-100">
              <h4 className="fw-semibold">Manage Tasks</h4>
              <p className="text-muted">
                Track your daily tasks and improve productivity.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded bg-light shadow-sm h-100">
              <h4 className="fw-semibold">Fully Responsive</h4>
              <p className="text-muted">
                Works seamlessly on mobile, tablet, and desktop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
