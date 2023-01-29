import "./home.css";
import { Link } from "react-router-dom";

import React from "react";

export const Home = () => {
  return (
    <div>
      <Link to="/about">about</Link>
      <Link to="/work">work</Link>
    </div>
  );
};
