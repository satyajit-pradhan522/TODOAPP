import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../../store";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
        "http://localhost:3000/api/auth/login",
        formData
      );

      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(login());
        // Save User ID (optional)
        sessionStorage.setItem("userId", response.data.user._id);

        setFormData({ email: "", password: "" });

        setTimeout(() => {
          navigate("/todo");
        }, 1000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid p-0">
      <ToastContainer />
      <div className="row g-0">
        {/* Left Section */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center login-left text-white p-5">
          <div className="text-center">
            <h1 className="fw-bold mb-4">Welcome Back</h1>
            <p className="lead">
              Login to access your tasks and organize your day efficiently.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center py-5">
          <div className="card shadow-sm p-4 login-card">
            <h2 className="text-center mb-3 fw-bold">Login</h2>
            <p className="text-center text-muted mb-4">
              Enter your credentials to continue
            </p>

            <form onSubmit={submit}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={change}
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
                  name="password"
                  value={formData.password}
                  onChange={change}
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn login-btn w-100"
                disabled={loading}
              >
                {loading ? "Logging In..." : "Login"}
              </button>
            </form>

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
