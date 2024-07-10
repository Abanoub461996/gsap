import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { LandingPageWrapper } from "./LandingPage.style";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const LandingPage: React.FC = () => {
  useGSAP(() => {
    /* Main navigation */
    let panelsSection = document.querySelector("#panels") as HTMLElement,
      panelsContainer = document.querySelector(
        "#panels-container"
      ) as HTMLElement,
      tween: any;
    document.querySelectorAll(".anchor").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        let href = (e.target as HTMLElement).getAttribute("href");
        if (!href) {
          return;
        }
        let targetElem = document.querySelector(href) as HTMLElement;
        let y: any = targetElem;
        if (
          targetElem &&
          panelsContainer?.isSameNode(targetElem.parentElement)
        ) {
          let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
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

    /* Panels */
    const panels = gsap.utils.toArray("#panels-container .panel");
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        // snap: {
        //   snapTo: 1 / (panels.length - 1),
        //   inertia: false,
        //   duration: { min: 0.1, max: 0.1 },
        // },
        end: () => "+=" + (panelsContainer?.offsetWidth - window.innerWidth),
      },
    });
    panels.forEach((panel: any, index: number) => {
      const container = panel.querySelector(".container");
      const containerWidth = panel?.offsetWidth || 0;

      const containerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: panel, // Pin the entire panel
          start: () => "+=" + containerWidth * index, // Scroll to the next panel
          end: () => "+=" + (containerWidth * (index + 1)) / 4, // Scroll to the next panel
          scrub: 1,
          markers: true,
        },
      });

      containerTimeline
        .from(container, {
          y: 300,
          duration: 1,
        })
        .from(container, {});
    });
  });

  return (
    <LandingPageWrapper>
      <div id="page" className="site">
        <div id="feather" className="feather"></div>
        <header id="masthead" className="site-header" role="banner">
          <nav className="anchor-nav" role="navigation">
            <a href="#intro" className="anchor">
              Home
            </a>
            <a href="#panel-1" className="anchor">
              Panel 1
            </a>
            <a href="#panel-3" className="anchor">
              Panel 3
            </a>
            <a href="#panel-5" className="anchor">
              Panel 5
            </a>
            <a href="#map" className="anchor">
              Map
            </a>
          </nav>
        </header>
        <main id="content" className="site-content" role="main">
          <section id="intro" className="full-screen pt-5 gradient-orange">
            <h1>A title</h1>
            <div id="clouds-layer-1" className="clouds"></div>
            <div id="clouds-layer-2" className="clouds"></div>
          </section>
          <section id="panels">
            <div id="panels-container" style={{ width: "500%" }}>
              <article
                id="panel-1"
                className="panel full-screen gradient-green"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <img src="" alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 1</h2>
                      <p className="step-description">Lorem Ipsum</p>
                      <div className="panels-navigation text-right">
                        <div className="nav-panel" data-sign="plus">
                          <a href="#panel-2" className="anchor">
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-2" className="panel full-screen gradient-blue">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <img src="" alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 2</h2>
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
                </div>
              </article>
              <article
                id="panel-3"
                className="panel full-screen gradient-green"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <img src="" alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 3</h2>
                      <p className="step-description">Lorem Ipsum is</p>
                      <div className="panels-navigation">
                        <div className="nav-panel" data-sign="minus">
                          <a href="#panel-2" className="anchor">
                            Prev
                          </a>
                        </div>
                        <div className="nav-panel" data-sign="plus">
                          <a href="#panel-4" className="anchor">
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article id="panel-4" className="panel full-screen gradient-blue">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <img src="" alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 4</h2>
                      <p className="step-description">Lorem</p>
                      <div className="panels-navigation">
                        <div className="nav-panel" data-sign="minus">
                          <a href="#panel-3" className="anchor">
                            Prev
                          </a>
                        </div>
                        <div className="nav-panel" data-sign="plus">
                          <a href="#panel-5" className="anchor">
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                id="panel-5"
                className="panel full-screen gradient-green"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <img src="" alt="" />
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <h2>Panel 5</h2>
                      <p className="step-description">Lorem Ipsum is</p>

                      <div className="panels-navigation text-right">
                        <div className="nav-panel" data-sign="minus">
                          <a href="#panel-4" className="anchor">
                            Prev
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section id="map" className="full-screen gradient-orange"></section>
        </main>
      </div>
    </LandingPageWrapper>
  );
};

export default LandingPage;
