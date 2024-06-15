import { useState } from 'react';
import './service.css';

export default function Service() {
  const [toggle, setToggle] = useState(0);

  const closeModal = () => {
    setToggle(0);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Frontend <br /> Developer</h3>
          </div>
          <span className="services__button" onClick={() => setToggle(1)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
              <h3 className="services__modal-title">Frontend Developer</h3>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Design and develop user interfaces with a focus on responsiveness and user experience.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Implement front-end functionality using modern JavaScript frameworks like React.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Optimize front-end performance and ensure cross-browser compatibility.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Product <br /> Designer</h3>
          </div>
          <span className="services__button" onClick={() => setToggle(2)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
              <h3 className="services__modal-title">Product Designer</h3>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Create and refine product designs that meet user needs and align with business objectives.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Prototype and iterate on designs to achieve the best user experience.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Collaborate with development teams to ensure designs are implemented correctly.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Fullstack <br /> Developer</h3>
          </div>
          <span className="services__button" onClick={() => setToggle(3)}>View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggle === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
              <h3 className="services__modal-title">Fullstack Developer</h3>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Develop full-stack applications with a focus on both front-end and back-end technologies.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Implement robust authentication and authorization systems for enhanced security.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Design and optimize databases for scalability and performance.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle service__modal-icon"></i>
                  <p className="services__modal-info">Deploy and maintain applications on cloud platforms for continuous availability.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
