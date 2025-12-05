import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <div className="container text-center">
        <h5 className="fw-bold">Todo App</h5>
        <p className="text-secondary  mt-2 mb-3">
          Stay productive and manage your daily tasks effortlessly.
        </p>

        <div className="d-flex justify-content-center gap-4 my-3">
          <a href="#" className="text-dark text-decoration-none">
            Home
          </a>
          <a href="#" className="text-dark text-decoration-none">
            About
          </a>
          <a href="#" className="text-dark text-decoration-none">
            Tasks
          </a>
        </div>

        <hr className="border-dark" />

        <p className="small mb-0">
          © {new Date().getFullYear()} | Made with ❤️ by{" "}
          <strong>Satyajit Pradhan</strong>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
