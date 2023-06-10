import * as React from "react";
import EducationSection from "./styles";
import HeaderSection from "../../../molecules/HeaderSection";

const Education: React.FC = () => {
  return (
    <EducationSection id="education" data-wow-offset="40">
      <HeaderSection>EDUCATION</HeaderSection>
      <div className="row">
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>Aug 2013 - Jan 2018 </h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon">
                    <i className="fa fa-file-text"></i>
                  </span>
                  <span className="specialty-name">Student</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon">
                    <i className="fa fa-building"></i>
                  </span>
                  <span className="university-name">Bach khoa University</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
              I'm a student in Bk university. My specialize is Chemical
              engineer. I completed this degree from this school. I successful
              completed all the credits without any fallout and got Good grade
              overall.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>Sep 2021 - Feb 2022</h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon">
                    <i className="fa fa-file-text"></i>
                  </span>
                  <span className="specialty-name">Student</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon">
                    <i className="fa fa-university"></i>
                  </span>
                  <span className="university-name">F8 center</span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
              I spent 6 month at here to start learn IT from zero number. After
              5 month I have my first project and use it to apply my job.
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </EducationSection>
  );
};

export default Education;
