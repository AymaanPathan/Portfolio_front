import "./qualification.css";
import { useState } from "react";

export default function Qualification() {
  const [toggle, setToggle] = useState(1);

  const toggleOne = () => {
    setToggle(1);
  };

  const toggleTwo = () => {
    setToggle(2);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button-flex`}
            onClick={toggleOne}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={`qualification__button button-flex`}
            onClick={toggleTwo}
          >
            <i className="uil uil-briefcase qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="info">
                <h3 className="qualification__title">Zenith High School</h3>
                <span className="qualification__subtitle">
                  Completed schooling
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2009-2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="info">
                <h3 className="qualification__title">Navrachana University</h3>
                <span className="qualification__subtitle">
                  Bachelor of Computer Applications
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="info">
                <h3 className="qualification__title">CODTECH</h3>
                <span className="qualification__subtitle">
                  Web Developer Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  May 2024 - June 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="info">
                <h3 className="qualification__title">CODSOFT</h3>
                <span className="qualification__subtitle">
                  Fullstack Developer Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  june 2024 - Present
                </div>
              </div>
            </div>
            <div
              className={
                toggle === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div className="info">
                  <h3 className="qualification__title">Techno Hack</h3>
                  <span className="qualification__subtitle">
                    Fullstack Developer Intern
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    June 2024 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
