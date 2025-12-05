import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Left Side Image (Desktop Only) */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center color-primary text-white p-5">
          <div className="text-center">
            <h1 className="fw-bold mb-4">Welcome to Todo App</h1>
            <p className="lead">
              Stay organized and productive.
              <br />
              Create your account and start managing your tasks easily.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5">
          <div
            className="card shadow p-4"
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <h2 className="text-center mb-3">Create Account</h2>
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
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
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
                  required
                />
              </div>

              <button type="submit" className="btn signup-btn w-100">
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
