import React from "react";
import styled from "styled-components";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Particle from "../Components/Particle";
import { ReactTyped as Typed } from "react-typed";
import PrimaryButton from "../Components/PrimaryButton";
import { NavLink } from "react-router-dom";

// import iconRS from "../img/icons8-researchgate.svg";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YoutubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from "@mui/icons-material/Instagram";

// import CodeTheme from '../Components/codeTheme';
// import CodeThemeSec from '../Components/codeThemeSec';
import "./styles.css";
// import carbon from '../img/carbon.svg';

function HomePage(props) {
  const { theme } = props;
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle theme={theme} />
      </div>

      <div className="underlayText">Mallikarjun Reddy</div>
      <div className="typography">
        {/* <h1>Hi, I'm <span className='myname'  data-value="" id="typewriter-effect"></span></h1> */}
        <h1>
          Hi, I'm{" "}
          <span className="myname" data-value="">
            Mallikarjun Reddy
          </span>
        </h1>
        <h5>
          A{" "}
          <Typed
            strings={[
              "Data Scientist",
              "Data Engineer",
              "Data Analyst",
              "Machine Learning Engineer",
              "Software Engineer",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop
            className="typing"
          />
        </h5>
        <p>
          Specializing in Data Science, Machine Learning, Data Engineering, and
          Data Analyst, I'm dedicated to driving innovation and uncovering
          valuable insights. Let's collaborate to transform data into actionable
          strategies and elevate your projects to new heights!
        </p>
        <div className="social">
          <div className="icons">
            <a href="https://github.com/mallireddy09" className="icon i-github">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/mallireddy09/"
              className="icon i-linkedin"
            >
              <LinkedInIcon />
            </a>
          </div>
          <PrimaryButton icon={true} title={"Resume"} />
          <NavLink to="/about" activeClassName="active-class" exact>
            <PrimaryButton icon={false} title={"Read more"} />
          </NavLink>
        </div>

        <br />
        <br />
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 4px solid var(--border-color);
  }
  .typing {
    fontweight: 300;
    color: var(--primary-color);
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: justify;
    width: 80%;
    padding: 0 10px;
    line-height: 1.5;
    .social {
      display: flex;

      .icons {
        display: flex;
        // justify-content: center;
        margin-top: 1rem;
        .icon {
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          &:hover {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
          }
          &:not(:last-child) {
            margin-right: 1rem;
          }
          svg {
            margin: 0.5rem;
          }
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid blue;
          color: blue;
        }
      }
      .i-instagram {
        &:hover {
          border: 2px solid #d63031;
          color: #d63031;
        }
      }
      .i-researchgate {
        &:hover {
          border: 2px solid #a4acc4;
          color: #a4acc4;
        }
      }
    }
  }
`;

export default HomePage;
