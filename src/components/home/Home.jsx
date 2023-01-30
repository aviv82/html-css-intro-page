import "./home.css";

import React from "react";

import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-wrap">
      <Navbar page="home" />
      <article className="home-art">
        <section className="home-intro">
          <h1 className="home-1">Hello Friends!</h1>
          <p className="home-intro">
            Welcome to my page. <br />
            My name is aviv and I am Developer, teacher, artist and student
          </p>
          <img
            className="home-pic"
            src="assets/img/portrait.jpg"
            width="300"
            alt="aviv"
          />
        </section>
        <section className="home-work">
          <h4 className="home-2">Check out what I've been up to</h4>
          <Link to="/media">
            <Button title="Digital Media" color="blue" />
          </Link>
          <Link to="/web">
            <Button title="Web Development" color="blue" />
          </Link>
          <Link to="/video">
            <Button title="Video Work" color="blue" />
          </Link>
        </section>
      </article>
      <Footer />
    </div>
  );
};
