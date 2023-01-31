import "./web.css";
import React, { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { Git } from "../../svg/Git";
import { Figma } from "../../svg/Figma";
import { Website } from "../../svg/Website";
import { webLinks } from "../../links/webLinks";
import { ArrowRight } from "../../svg/ArrowRight";
import { ArrowLeft } from "../../svg/ArrowLeft";

export const Web = () => {
  const [web, setWeb] = useState(0);

  const leftHandle = () => {
    web === 0 ? setWeb(webLinks.length - 1) : setWeb(web - 1);
    // console.log(video);
  };

  const rightHandle = () => {
    web === webLinks.length - 1 ? setWeb(0) : setWeb(web + 1);
    // console.log(video);
  };

  return (
    <div className="web-wrap">
      <Navbar page="web" />
      <article className="web-main">
        <section className="web-intro">
          <h1 className="web-1">UX/UI</h1>
          <p className="web-p">
            I have completed Hack Your Future Belgium's 10 month web development
            course in June 2022. <br />
            In November 2022 I also completed HYF's 10 week .NET course.
            <br />
            Ever since I have dedicated myself to become a better coder and
            developer.
          </p>
        </section>
        <section className="web-list">
          <h3 className="web-3">Some of my recent work</h3>
          <div className="web-item">
            <h4 className="web-title">{webLinks[web][3]}</h4>
            <div className="web-viewer">
              <button className="arrow-left" onClick={leftHandle}>
                <ArrowLeft />
              </button>
              <img
                className="web-img"
                src={webLinks[web][0]}
                alt={webLinks[web][3]}
              />
              <button className="arrow-right" onClick={rightHandle}>
                <ArrowRight />
              </button>
            </div>
            <div className="web-links">
              <a href={webLinks[web][1]}>
                <Figma />
              </a>
              <a href={webLinks[web][2]}>
                <Website />
              </a>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
};
