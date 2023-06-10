import * as React from "react";
import ExperienceSection from "./styles";
import HeaderSection from "../../../molecules/HeaderSection";

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience" data-wow-offset="40">
      <HeaderSection>EXPERIENCE</HeaderSection>
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <span className="icon-experience">
            <i className="fa fa-briefcase"></i>
          </span>
          <div className="all-experience">
            <div className="experience-content">
              <span className="period-experience">Feb 2023 - Current</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Fpt sorfware</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: NhathuocLongChau</p>
                <p>
                  Technologies: React, NestJs, MySQL, Mongodb, Elasticsearch
                </p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Dec 2022 - Feb 2023</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Fpt sorfware</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: HR management</p>
                <p>Technologies: SQL, .net, React</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Sep 2022 - Dec 2022</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Fpt sorfware</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: Tour Management</p>
                <p>Technologies: SQL, .net, React</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">Jul 2022 - Sep 2022</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Fpt sorfware</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: E-Commerce</p>
                <p>Technologies: SQL, .net, React</p>
              </div>
            </div>
            <div className="experience-content">
              <span className="period-experience">May 2022 - Jul 2022</span>
              <h3 className="specialty-name">Web Developer</h3>
              <h3 className="company-name">Fpt software</h3>
              <div className="prg-experience">
                <p>Full-time Staff.</p>
                <p>Project: Cursus education</p>
                <p>Technologies: SQL, .net, React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
