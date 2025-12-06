import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Left Section – Desktop Only */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center color-primary text-white p-5">
          <div className="text-center px-4">
            <h1 className="fw-bold mb-4">Welcome to Todo App</h1>
            <p className="lead">
              Organize your tasks, boost your productivity,
              <br /> and stay ahead every day.
            </p>
          </div>
        </div>

        {/* Right Section – Signup Form */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5">
          <div
            className="card shadow p-4"
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <h2 className="text-center mb-3 fw-bold">Create Account</h2>
            <p className="text-center text-muted mb-4">
              Sign up to get started
            </p>

            <form>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  onChange={change}
                  value={formData.username}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={change}
                  value={formData.email}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={change}
                  value={formData.password}
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn signup-btn w-100"
                onClick={submit}
              >
                Sign Up
              </button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
