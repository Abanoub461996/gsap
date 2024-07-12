import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  width: 100%;
  .container {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #panels #panels-container {
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding: 0;
    overflow: hidden;
    background-color: #003049;
  }
  #panels #panels-container .panel {
    color: #eae2b7;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #d62828;
  }
  #panels #panels-container .panel img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  #panels #panels-container .panel .panels-navigation {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  #panels #panels-container .panel .anchor-panel,
  #panels #panels-container .panel .nav-panel {
    text-transform: uppercase;
    margin-right: 2rem;
  }
  #panels #panels-container .panels-navigation {
    position: absolute;
    width: 100%;
    bottom: 2rem;
    right: 2rem;
  }
  #masthead {
    position: fixed;
    z-index: 9999;
    width: 100%;
  }
  #masthead .anchor-nav {
    display: flex;
    gap: 2em;
    justify-content: center;
    align-items: center;
  }
  #masthead a {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5em 0;
    position: relative;
    &:after {
      content: "";
      width: 0;
      height: 1px;
      background-color: #eae2b7;
      transition: width 0.5s ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
  .box-1 {
    width: 100px;
    height: 100px;
    background: #fff;
    margin-left:2em;
    border-radius: 5%;
  }
`;
