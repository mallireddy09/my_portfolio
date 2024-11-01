import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/arjun_image.jpg";
import avatarDark from "../img/arjun_image.jpg";
import avatarNew from "../img/arjun_image.jpg";
import home from "../Components/Assets/home.svg";
import darkHome from "../Components/Assets/darkHome.svg";
import about from "../Components/Assets/about.svg";
import resume from "../Components/Assets/resume.svg";
import project from "../Components/Assets/project.svg";
import blog from "../Components/Assets/blog.svg";
import certification from "../Components/Assets/certification.svg";
import contact from "../Components/Assets/contact.svg";
import darkAbout from "../Components/Assets/darkAbout.svg";
import darkResume from "../Components/Assets/darkResume.svg";
import darkProject from "../Components/Assets/darkProject.svg";
import darkBlog from "../Components/Assets/darkBlog.svg";
import darkCertification from "../Components/Assets/darkCertification.svg";
import darkContact from "../Components/Assets/darkContact.svg";
import skills from "../Components/Assets/skills.svg";
import darkSkills from "../Components/Assets/darkSkills.svg";
import darkEducation from "../Components/Assets/darkEducation.svg";
import education from "../Components/Assets/education.svg";

function Navigation({ theme }) {
  const handleHover = () => {
    let nav_image = document.querySelector(".avatar img");
    nav_image.src = avatarNew;
  };
  const handleChangeImage = () => {
    let nav_image = document.querySelector(".avatar img");
    nav_image.src = theme === "light-theme" ? avatarDark : avatar;
  };
  return (
    <NavigationStyled>
      <div className="avatar">
        <img
          src={theme === "light-theme" ? avatarDark : avatar}
          alt="light-theme"
          onMouseOver={handleHover}
          onMouseOut={handleChangeImage}
        />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkHome : home}
              alt="Home"
              className="nav-icon"
            />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkAbout : about}
              alt="About"
              className="nav-icon"
            />
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkSkills : skills}
              alt="Resume"
              className="nav-icon"
            />
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/experience" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkResume : resume}
              alt="Resume"
              className="nav-icon"
            />
            Experience
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/education" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkEducation : education}
              alt="Resume"
              className="nav-icon"
            />
            Education
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkProject : project}
              alt="Projects"
              className="nav-icon"
            />
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkBlog : blog}
              alt="Blog"
              className="nav-icon"
            />
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/certification" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkCertification : certification}
              alt="Certification"
              className="nav-icon"
            />
            Certification
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            <img
              src={theme === "light-theme" ? darkContact : contact}
              alt="Contact"
              className="nav-icon"
            />
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          <b>&copy; 2024 Mallikarjun Reddy</b>
        </p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1.5rem 0;
    img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      border: 4px solid var(--border-color);
    }
  }
  .nav-icon {
    width: 22px;
    height: 22px;
    margin-right: 8px;
    vertical-align: middle;
  }

  .nav-items {
    width: 100%;
    margin-left: 30%;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      margin-bottom: 5%;
      a {
        display: flex;
        // align-items: center;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
