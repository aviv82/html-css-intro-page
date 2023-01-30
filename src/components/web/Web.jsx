import "./web.css";
import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Web = () => {
  return (
    <div>
      <Navbar page="web" />
      web
      <Footer />
    </div>
  );
};
