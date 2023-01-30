import "./navbar.css";

import { Link } from "react-router-dom";

import React from "react";

export const Navbar = ({ page }) => {
  return (
    <header className="nav-wrap">
      <img
        className="nav-thumb"
        src="assets/img/nav-thumb.jpg"
        alt="navigation bar thumb"
      />
      {page === "home" ? (
        <nav className="nav-links">
          <Link className="nav-link" to="/media">
            media
          </Link>
          <Link className="nav-link" to="/video">
            video
          </Link>
          <Link className="nav-link" to="/web">
            web
          </Link>
        </nav>
      ) : page === "media" ? (
        <nav className="nav-links">
          <Link className="nav-link" to="/">
            home
          </Link>
          <Link className="nav-link" to="/video">
            video
          </Link>
          <Link className="nav-link" to="/web">
            web
          </Link>
        </nav>
      ) : page === "video" ? (
        <nav className="nav-links">
          <Link className="nav-link" to="/">
            home
          </Link>
          <Link className="nav-link" to="/media">
            media
          </Link>
          <Link className="nav-link" to="/web">
            web
          </Link>
        </nav>
      ) : (
        <nav className="nav-links">
          <Link className="nav-link" to="/">
            home
          </Link>
          <Link className="nav-link" to="/media">
            media
          </Link>
          <Link className="nav-link" to="/video">
            video
          </Link>
        </nav>
      )}
    </header>
  );
};
