import "./footer.css";

import React from "react";
import { Git } from "../../svg/Git";
import { Youtube } from "../../svg/Youtube";
import { Linked } from "../../svg/Linked";
import { Email } from "../../svg/Email";

export const Footer = () => {
  return (
    <footer className="foot-wrap">
      <p className="foot-credit">Created by aviv dror 2023</p>
      <a className="foot-link" href="mailto:aviv.dror@gmail.com">
        <Email />
      </a>
      <ul className="foot-link-list">
        <li className="foot-link-item">
          <a href="https://github.com/aviv82">
            <Git />
          </a>
        </li>
        <li className="foot-link-item">
          <a href="https://www.youtube.com/channel/UCDc3QB1JAx8YrSOJdJ3E5-g">
            <Youtube />
          </a>
        </li>
        <li className="foot-link-item">
          <a href="https://www.linkedin.com/in/aviv-dror-26a615244/">
            <Linked />
          </a>
        </li>
      </ul>
    </footer>
  );
};
