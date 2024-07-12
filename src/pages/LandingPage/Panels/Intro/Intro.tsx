import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { EasePack } from "gsap/EasePack";
import { IntroSectionWrapper } from "./Intro.style";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const IntroSection: React.FC = () => {
  gsap.registerPlugin(TextPlugin, EasePack, ScrollTrigger);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {});
  return (
    <IntroSectionWrapper id="gunText" ref={containerRef}>
      <div className="row">
        <div className="col-6">
          <img src="" alt="" />
        </div>
        <div className="col-6 d-flex flex-column">
          <h2>Panel 1</h2>
          <p className="step-description">Lorem Ipsum is</p>
          <div className="panels-navigation">
            <div className="nav-panel" data-sign="minus">
              <a href="#panel-1" className="anchor">
                Prev
              </a>
            </div>
            <div className="nav-panel" data-sign="plus">
              <a href="#panel-3" className="anchor">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </IntroSectionWrapper>
  );
};

export default IntroSection;
