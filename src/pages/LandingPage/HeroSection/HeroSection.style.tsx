import styled from "styled-components";
import bgimage from "../../../assets/hero.jpg";

export const HeroSectionWrapper = styled.section`
  width: 100%;
  background: url(${bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  .header__Section__content {
    position: absolute;
    height: 81%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    right: 5%;
    bottom: 0;
    .header__logo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text {
        font-size: 8rem;
        stroke: #003049;
        stroke-width: 2px;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        fill: transparent;
        animation: dash 5s ease-out alternate infinite;
      }
      @keyframes dash {
        from {
          stroke-dashoffset: 1000;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
      .header__title {
        font-weight: 900;
        font-size: 4rem;
        font-family: "Lobster", sans-serif;
        margin: 0;
      }
    }

    .header__slogan {
      font-weight: 400;
      font-size: 1.5rem;
      text-align: right;
      padding: 2em;
      margin: 0;
    }
  }
`;
