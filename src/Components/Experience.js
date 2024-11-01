import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "./ResumeItem";

function Experience() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Experience"} span={"experience"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={school} title={"Academic Work Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Aug 2024 - Dec 2024"}
            title={"Graduate Student Assistant at University at Buffalo"}
            subTitle={"University at Buffalo (SUNY)"}
            link={"https://www.buffalo.edu/"}
            //text={`--------`}
            // css={1}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={briefcase} title={"Professional Work Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Aug 2022 - July 2023"}
            title={"Data Analyst"}
            subTitle={"Nineleaps"}
            link={"https://www.nineleaps.com/"}
            //text={`--------`}
          />
          <ResumeItem
            year={"July 2020 - Aug 2022"}
            title={"Associate Data Science"}
            link={"https://www.npci.org.in/"}
            subTitle={"National Payments Corporation Of India (NPCI)"}
            //text={`--------`}
          />
          <ResumeItem
            year={"Jan 2020 - June 2020"}
            title={"Application Developer Intern"}
            subTitle={"Nineleaps"}
            link={"https://www.nineleaps.com/"}
            //text={`--------`}
          />
          <ResumeItem
            year={"May 2019 - Aug 2019"}
            title={"Machine Learning Research Intern"}
            subTitle={"Samsung R&D Institute India"}
            link={"https://research.samsung.com/"}
            //text={`--------`}
          />
          <ResumeItem
            year={"Jan 2019 - March 2019"}
            title={"Machine Learning Engineer Intern"}
            subTitle={"Dhyanahitha Organization"}
            link={"https://dhyanahitha.com/"}
            //text={`--------`}
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
export default Experience;
