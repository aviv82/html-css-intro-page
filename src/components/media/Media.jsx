import "./media.css";

import React, { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { mediaLinks } from "../../links/mediaLinks";
import { ArrowLeft } from "../../svg/ArrowLeft";
import { ArrowRight } from "../../svg/ArrowRight";

export const Media = () => {
  const [media, setMedia] = useState(0);
  const [view, setView] = useState(false);

  const leftHandle = () => {
    media === 0 ? setMedia(mediaLinks.length - 1) : setMedia(media - 1);
    // console.log(video);
  };

  const rightHandle = () => {
    media === mediaLinks.length - 1 ? setMedia(0) : setMedia(media + 1);
    // console.log(video);
  };

  const imgHandle = () => {
    setView(!view);
  };

  return (
    <div className="media-wrap">
      <Navbar page="media" />
      <article className="media-main">
        <section className="media-intro">
          <h1 className="media-1">Digital Media</h1>
          <p className="media-p">
            I have worked as a graphic designer and visual artist since 2011.
            <br /> My work deals with abstraction and explores methods of file
            and data manipulation such as copy degradation and glitch.
          </p>
        </section>
        <section className="media-list">
          <h3 className="media-3">Some of my past work</h3>
          <div className="media-view">
            <h4 className="media-title">{mediaLinks[media][1]}</h4>
            <div className="media-item">
              <button className="arrow-left" onClick={leftHandle}>
                <ArrowLeft />
              </button>
              <img
                onClick={imgHandle}
                className={view === false ? "media-img-s" : "media-img-l"}
                // className="media-img"
                src={mediaLinks[media][0]}
                alt={mediaLinks[media][1]}
              />
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
