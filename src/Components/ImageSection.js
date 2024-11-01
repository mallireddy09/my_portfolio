import React from "react";
import styled from "styled-components";
// import resume from '../img/resume.jpg';
import resumeSvg from "../img/arjun.svg";
import resumeSvgDark from "../img/arjun-main2.svg";
import PrimaryButton from "./PrimaryButton";

function ImageSection({ theme }) {
  return (
    <>
      <ImageSectionStyled>
        {/* <div className="left-content">
                <img height="60%" width="100%" src={theme === 'light-theme' ? resumeSvg : resumeSvgDark} alt="profile_photo" id='yourSvgPath'/>
            </div> */}
        <div className="right-content">
          <h4>
            I am <span>Mallikarjun Reddy</span>
          </h4>
          <h2>Data Analyst | Data Scientist | 3+ Years of Experience</h2>
          <p className="paragraph">
            I'm Mallikarjun Reddy, and I’ve spent over 3 years working as a Data
            Analyst and Data Scientist. Right now, I'm pursuing a Master's in
            Data Science at the University at Buffalo (SUNY). Over the years,
            I’ve had the chance to work at companies like Nineleaps, NPCI,
            Samsung R&D Institute India, and Dhyanahitha Organization, where
            I’ve developed my skills in data analysis, data science, and
            software development. I’m always focused on growing my skill set and
            pushing myself professionally. What excites me most is finding
            innovative solutions that can make a real difference for the
            organizations I work with. Outside of work, I’m passionate about
            adventure sports and love keeping up with the latest tech trends.{" "}
          </p>

          <div className="about-info">
            <div className="info-title">
              <p>Full Name</p>
              <p>Age</p>
              <p>Nationality </p>
              <p>Languages </p>
              <p>Location</p>
              <p>Profile</p>
            </div>
            <div className="info">
              <p>: Mallikarjun Reddy</p>
              <p>: 25</p>
              <p>: Indian </p>
              <p>: English, Telugu, Hindi </p>
              <p>: Buffalo, New York, United States</p>
              <p>
                : Aspiring Data Scientist | Data Analyst | Data Engineer |
                Software Developer
              </p>
            </div>
          </div>
        </div>
      </ImageSectionStyled>
    </>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
    .right-content {
      .paragraph {
        text-align: left;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .mid-sec {
      flex-direction: column;
      .left-con {
        margin-bottom: 2rem;
      }
      .right-con {
        .paragraph {
          text-align: left;
        }
      }
    }
  }
  @media screen and (max-width: 520px) {
    .mid-sec {
      flex-direction: column;
      .left-con {
        margin-bottom: 2rem;
      }
      .right-con {
        .paragraph {
          text-align: left;
        }
        video {
          width: 70%;
        }
      }
    }
  }
  #yourSvgPath {
    stroke: #ffffff;
    stroke-width: 1;
    stroke-dasharray: 1000; /* The value here should be the length of the SVG path */
    stroke-dashoffset: 1000; /* Same as stroke-dasharray to initially hide the path */
    transition: stroke-dashoffset 2s; /* Adjust time as needed */
  }

  #yourSvgPath:hover {
    stroke-dashoffset: 0; /* The path will be "drawn" on hover */
  }

  .left-content {
    width: 100%;
    img {
      width: 95%;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      text-align: justify;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
