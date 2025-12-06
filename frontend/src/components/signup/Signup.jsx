import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );
      if (response.data.message === "User Already Exists") {
        toast.error("User Already Exists");
      } else {
        toast.success(response.data.message);
        setFormData({ username: "", email: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      toast.error("Signup failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper container-fluid">
      <ToastContainer />
      <div className="row g-0">
        {/* Left Side (Desktop Only) */}
        <div className="col-lg-6 left-panel d-none d-lg-flex align-items-center justify-content-center">
          <div className="text-center px-4">
            <h1 className="fw-bold mb-4">Welcome to Todo App</h1>
            <p className="lead">
              Organize your tasks, boost productivity,
              <br /> and stay ahead every day.
            </p>
          </div>
        </div>

        {/* Right Side – Signup Form */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5">
          <div className="card signup-card shadow p-4">
            <h2 className="text-center mb-3 fw-bold">Create Account</h2>
            <p className="text-center text-muted mb-4">
              Sign up to get started
            </p>

            <form onSubmit={submit}>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control input-box"
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
                  className="form-control input-box"
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
                  className="form-control input-box"
                  placeholder="Enter your password"
                  onChange={change}
                  value={formData.password}
                  required
                />
              </div>

              {/* Button */}
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
