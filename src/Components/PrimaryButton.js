import React from "react";
import styled from "styled-components";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
function PrimaryButton({ icon, title }) {
  return (
    <PrimaryButtonStyled>
      <a
        href="https://drive.google.com/file/d/1SV0KGJ-y8ayeJozpz3sggtdmx9vARm-_/view?usp=sharing"
        download="Mallikarjun_Resume.pdf"
      >
        {icon && <FileDownloadOutlinedIcon />}
        {title}
      </a>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  // background-color: var(--primary-color);
  border: 2px solid var(--border-color);
  margin-left: 1.2rem;
  margin-top: 0.8rem;
  padding: 0.8rem 1.2rem;
  height: 3rem;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.4s ease-in-out;
    color: var(--white-color);
  }
  &:hover a {
    color: var(--primary-color);
  }
`;
export default PrimaryButton;
