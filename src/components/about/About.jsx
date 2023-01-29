import "./about.css";

import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/work">work</Link>
    </div>
  );
};
