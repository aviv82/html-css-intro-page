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
          <p className="home-p">
            Welcome to my page. <br />
            My name is aviv and I am a <br /> Developer, teacher, artist and
            student
          </p>
          <img
            className="home-img"
            src="assets/img/portrait.jpg"
            width="300"
            alt="aviv"
          />
        </section>
        <section className="home-work">
          <h4 className="home-2">Check out what I've been up to</h4>
          <div className="home-buttons">
            <Link to="/web">
              <Button title="Web" color="blue" />
            </Link>
            <Link to="/media">
              <Button title="Digital Media" color="blue" />
            </Link>
            <Link to="/video">
              <Button title="Video" color="blue" />
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};
