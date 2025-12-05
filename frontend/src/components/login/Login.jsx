import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Left Section (desktop only) */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center color-primary text-white p-5">
          <div className="text-center">
            <h1 className="fw-bold mb-4">Welcome Back</h1>
            <p className="lead">
              Login to access your tasks, stay organized, and be productive.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5">
          <div
            className="card shadow p-4"
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <h2 className="text-center mb-3">Login</h2>
            <p className="text-center text-muted mb-4">
              Enter your credentials to continue
            </p>

            <form>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button className="btn login-btn w-100" type="submit">
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="text-center mt-3">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
