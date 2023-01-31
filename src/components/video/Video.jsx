import "./video.css";

import React, { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { videoLinks } from "../../links/videoLinks";
import { ArrowLeft } from "../../svg/ArrowLeft";
import { ArrowRight } from "../../svg/ArrowRight";

export const Video = () => {
  const [video, setVideo] = useState(0);

  const leftHandle = () => {
    video === 0 ? setVideo(videoLinks.length - 1) : setVideo(video - 1);
    // console.log(video);
  };

  const rightHandle = () => {
    video === videoLinks.length - 1 ? setVideo(0) : setVideo(video + 1);
    // console.log(video);
  };

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
          <div className="video-viewer">
            <h4 className="video-title">{videoLinks[video][1]}</h4>
            <div className="video-view">
              <button className="arrow-left" onClick={leftHandle}>
                <ArrowLeft />
              </button>
              <iframe
                className="video-iframe"
                width="560"
                height="315"
                src={videoLinks[video][0]}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
              <button className="arrow-right" onClick={rightHandle}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};
