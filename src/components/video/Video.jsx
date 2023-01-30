import "./video.css";

import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Video = () => {
  return (
    <div className="video-wrap">
      <Navbar page="video" />
      <article className="video-body">
        <section className="video-intro">
          <h1 className="video-1">Video Works</h1>
          <p className="video-p">
            I have been editing video and audio since 2006, and teaching editing
            since 2013 <br />I edit mainly with Adobe After effects and Premiere
            <br />
            My work has been displayed in festivals and shows in Canada, Japan,
            Switzerland, Israel and the UK
          </p>
        </section>
        <section className="video-scroll">
          <h3 className="video-3">Some of my past works</h3>
          <div className="video-view">
            <h4 className="video-title">Charm Mock Banner</h4>
            <iframe
              className="video-iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Wvv9LKxt60o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-view">
            <h4 className="video-title">Re-max Halifax Mock Banner</h4>
            <iframe
              className="video-iframe"
              width="560"
              height="315"
              src="https://youtube.com/embed/6sjLomUNGgQ?feature=share"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-view">
            <h4 className="video-title">Kemetics</h4>
            <iframe
              className="video-iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/--vUKs4s5tA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-view">
            <h4 className="video-title">Got Soul</h4>
            <iframe
              className="video-iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/roDHHGznTF0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-view">
            <h4 className="video-title">Goner</h4>
            <iframe
              className="video-iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FxpNaWrKYD8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Wvv9LKxt60o"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>;
