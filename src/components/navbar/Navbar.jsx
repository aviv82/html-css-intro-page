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
        <nav>
          <Link to="/media">media</Link>
          <Link to="/video">video</Link>
          <Link to="/web">web</Link>
        </nav>
      ) : page === "media" ? (
        <nav>
          <Link to="/">home</Link>
          <Link to="/video">video</Link>
          <Link to="/web">web</Link>
        </nav>
      ) : page === "video" ? (
        <nav>
          <Link to="/">home</Link>
          <Link to="/media">media</Link>
          <Link to="/web">web</Link>
        </nav>
      ) : (
        <nav>
          <Link to="/">home</Link>
          <Link to="/media">media</Link>
          <Link to="/video">video</Link>
        </nav>
      )}
    </header>
  );
};
