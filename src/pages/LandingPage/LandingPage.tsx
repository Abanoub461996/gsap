import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// COMPONENTS
import HeroSection from "./HeroSection/HeroSection";
import IntroSection from "./Panels/Intro/Intro";
import MorphingShape from "./Footer/FooterSection";
// STYLE
import { LandingPageWrapper } from "./LandingPage.style";

const LandingPage: React.FC = () => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  useGSAP(() => {
    const panelsContainer = document.querySelector(
        "#panels-container"
      ) as HTMLElement;
      // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
      let tween: any;
    document.querySelectorAll(".anchor").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const href = (e.target as HTMLElement).getAttribute("href");
        if (!href) {
          return;
        }
        const targetElem = document.querySelector(href) as HTMLElement;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let y: any = targetElem;
        if (
          targetElem &&
          panelsContainer?.isSameNode(targetElem.parentElement)
        ) {
          const totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
            totalMovement = (panels.length - 1) * targetElem.offsetWidth;
          y = Math.round(
            tween.scrollTrigger.start +
              (targetElem.offsetLeft / totalMovement) * totalScroll
          );
        }
        gsap.to(window, {
          scrollTo: {
            y,
            autoKill: false,
          },
          duration: 1,
        });
      });
    });

    const panels = gsap.utils.toArray("#panels-container .panel");
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (panelsContainer?.offsetWidth - window.innerWidth),
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    panels.forEach((panel: any, index: number) => {
      const container = panel.querySelector(".container");
      const containerWidth = container?.offsetWidth || 0;
      console.log(containerWidth);

      const containerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: () => containerWidth * index,
          end: () => containerWidth * (index + 1),
          scrub: 1,
          toggleActions: "play reverse",
          containerAnimation: tween,
        },
      });

      gsap.set(container, { autoAlpha: 1, scale: 1, z: 0.01 });
      containerTimeline.to(container, { autoAlpha: 1, scale: 2 });

      gsap.set(".box-1", { y: 100 });

      // red section
      gsap.to(".box-1", {
        y: -120,
        backgroundColor: "#1e90ff",
        ease: "none",
        scrollTrigger: {
          trigger: ".box-1",
          containerAnimation: tween,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
          id: "2",
        },
      });
    });
  });

  return (
    <LandingPageWrapper>
      <div id="page" className="site">
        <div id="feather" className="feather"></div>
        <header id="masthead" className="site-header" role="banner">
          <nav className="anchor-nav" role="navigation">
            <a href="#intro" className="anchor">
              connectMe
            </a>
            <a href="#panel-1" className="anchor">
              Panel 1
            </a>
            <a href="#panel-2" className="anchor">
              Panel 2
            </a>
            <a href="#panel-3" className="anchor">
              Panel 3
            </a>
            <a href="#footer" className="anchor">
              Footer
            </a>
          </nav>
        </header>
        <main id="content" className="site-content" role="main">
          <HeroSection />
          <section id="panels">
            <div id="panels-container" style={{ width: "300%" }}>
              <article
                id="panel-1"
                className="panel full-screen gradient-green"
              >
                <div className="container">
                  <IntroSection />
                </div>
              </article>
              <article id="panel-2" className="panel full-screen bg-red">
                <div className="container">
                  <div className="">
                  </div>
                  <div className="">
                    <h2>Panel 2</h2>
                    <p className="step-description">Lorem Ipsum is</p>
                  </div>
                  <div className="box-1"></div>
                </div>
              </article>
              <article
                id="panel-3"
                className="panel full-screen gradient-green"
              >
                <div className="container">
                  <div className="">
                    <div className="">
                    </div>
                    <div className="">
                      <h2>Panel 3</h2>
                      <p className="step-description">Lorem Ipsum is</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section id="footer">
            <MorphingShape />
          </section>
        </main>
      </div>
    </LandingPageWrapper>
  );
};

export default LandingPage;
