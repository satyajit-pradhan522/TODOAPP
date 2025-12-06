import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-wrapper mt-5 py-4">
      <div className="container text-center text-light">
        <h3 className="fw-bold">Todo App</h3>
        <p className="footer-tagline mt-2">
          Stay productive and manage your daily tasks effortlessly.
        </p>

        {/* Footer Links */}
        <div className="footer-links d-flex justify-content-center gap-4 my-3">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/todo" className="footer-link">
            Tasks
          </Link>
        </div>

        <div className="footer-line"></div>

        <p className="small mt-3 mb-0">
          © {new Date().getFullYear()} | Made with ❤️ by{" "}
          <strong className="author-name">Satyajit Pradhan</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
