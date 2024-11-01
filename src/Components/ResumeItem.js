import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text, link, css }) {
  return (
    <ResumeItemStyled>
      <div className="left-content left">
        <p>{year}</p>
      </div>
      <div className={`right-content right${css}`}>
        <h5>{title}</h5>
        <a href={link} target="_blank" rel="noreferrer">
          <h6>{subTitle}</h6>
        </a>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  //   display: flex;
  //   padding-left: 40px;
  //   padding-top: 20px;

  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  @media screen and (max-width: 421px) {
    .left-content {
      display: none;
    }
  }
  .right0 {
    flex: 1;
  }
  .right-content {
    // background-color: #000000;
    padding-left: 50%;
    position: relative;
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
  }
  .right1 {
    padding-left: 0rem;
  }
  @media screen and (max-width: 421px) {
    .right-content {
      padding: 1rem 1rem;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        height: 2px;
        width: 0rem;
        background-color: var(--border-color);
      }
    }
  }
`;
export default ResumeItem;
