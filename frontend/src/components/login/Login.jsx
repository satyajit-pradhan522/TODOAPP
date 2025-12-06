import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Left Section (Desktop Only) */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center login-left text-white p-5">
          <div className="text-center">
            <h1 className="fw-bold mb-4">Welcome Back</h1>
            <p className="lead">
              Login to access your tasks and keep your day organized.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5">
          <div className="card shadow-sm p-4 login-card">
            <h2 className="text-center mb-3 fw-bold">Login</h2>
            <p className="text-center text-muted mb-4">
              Enter your credentials to continue
            </p>

            <form>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn login-btn w-100">
                Login
              </button>
            </form>

            {/* Bottom Text */}
            <p className="text-center mt-3 mb-0">
              Don't have an account?{" "}
              <Link to="/signup" className="fw-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
