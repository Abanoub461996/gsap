import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// STYLES
import { HeroSectionWrapper } from "./HeroSection.style";

const HeroSection: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const slogan = document.querySelector(".header__slogan");
    const title = document.querySelector(".header__title");
    gsap.to(title, {
      yPercent: 350,
      ease: "none",
      scrollTrigger: {
        trigger: ".header__Section__content",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });
    gsap.to(slogan, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".header__Section__content",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });
  });
  return (
    <HeroSectionWrapper id="intro" className="header__Section">
      <div className="header__Section__content">
        <div className="header__logo">
          <svg height="120">
            <text x="0" y="100">
              4G
            </text>
          </svg>
          <h1 className="header__title">ConnectMe</h1>
        </div>
        <h5 className="header__slogan">Get Connected with Your Beloved</h5>
      </div>
    </HeroSectionWrapper>
  );
};
export default HeroSection;
