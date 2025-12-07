import React from "react";
import { FcTodoList } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../store";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("userId");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FcTodoList size={30} />
          <span className="brand-text">Todo App</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 mt-3 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/todo">
                Todos
              </Link>
            </li>

            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="btn btn-primary nav-btn" to="/signup">
                  Sign Up
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="btn btn-success nav-btn" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  className="btn btn-danger nav-btn"
                  to="/"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
