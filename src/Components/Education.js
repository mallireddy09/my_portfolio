import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "./ResumeItem";

function Education() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Education"} span={"education"} />
      <InnerLayout>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"Aug 2023 - Dec 2024"}
            title={"M.S in Data Science     "}
            subTitle={"University at Buffalo (SUNY)"}
            link={"https://www.buffalo.edu/"}
            text={"Grade: 3.86/4.0"}
            css={0}
          />
          <ResumeItem
            year={"June 2016 - May 2020"}
            title={"B.Tech in Computer Science Engineering"}
            subTitle={"GITAM University India"}
            link={"https://www.gitam.edu/"}
            text={"Grade: 3.6/4.0"}
            css={0}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .u-small-title-no-pad {
    padding-left: 0rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Education;
