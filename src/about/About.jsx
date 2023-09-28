import React from "react";
import "./about.css";
import ME from "../../src/assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article>
              <div className="about__card">
                <div className="about__icon">
                  <FaAward />
                </div>
                
                <h5>Experience</h5>
                <small>1.5+ Years Working</small>
              </div>
            </article>
            <article>
              <div className="about__card">
                <div className="about__icon">
                <FiUsers />
                </div>
                
                <h5>Clients</h5>
                <small>24+ Worlwide</small>
              </div>
            </article>
            <article>
              <div className="about__card">
                <div className="about__icon">
                <VscFolderLibrary />
                </div>
                
                <h5>Projects</h5>
                <small>19+ Completed</small>
              </div>
            </article>
          </div>

          <p>
          Hello! I'm Udayan, a passionate Laravel developer with 1.5 years of experience in creating robust and scalable web applications. I thrive on challenges and enjoy turning complex problems into simple, efficient, and elegant solutions.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
