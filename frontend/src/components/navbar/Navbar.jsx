import React from "react";
import { FcTodoList } from "react-icons/fc";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FcTodoList size={28} />
          <span className="brand-name">Todo App</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                Todos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-primary nav-btn" to="/signup">
                Sign Up
              </Link>
            </li>

            <li className="nav-item ms-2">
              <Link className="btn btn-success nav-btn" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item ms-2">
              <Link className="btn btn-danger nav-btn" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
