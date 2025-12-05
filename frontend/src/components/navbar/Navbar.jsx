import React from "react";
import "./Navbar.css";
import { FcTodoList } from "react-icons/fc";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container navbar-set">
          <a className="navbar-brand" href="#">
            <span className="brand-name poppins-bold">
              <FcTodoList />
              Todo App
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav"
                  aria-current="page"
                  href="#"
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav"
                  aria-current="page"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active btn-nav"
                  aria-current="page"
                  href="#"
                >
                  Logout
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  <img
                    className="img-fluid user-png"
                    src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                    alt="/"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
