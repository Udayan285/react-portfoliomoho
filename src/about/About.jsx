import React from "react";
import "./about.css";
import ME from "../../src/assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5 className="marginn">Get to know</h5>
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
                <small>3+ Years Working</small>
              </div>
            </article>
            <article>
              <div className="about__card">
                <div className="about__icon">
                <FiUsers />
                </div>
                
                <h5>Clients</h5>
                <small>200+ Worlwide</small>
              </div>
            </article>
            <article>
              <div className="about__card">
                <div className="about__icon">
                <VscFolderLibrary />
                </div>
                
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </div>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            sapiente ipsam! Sint ducimus fugit necessitatibus animi soluta,
            voluptatem eum eligendi id a, natus voluptate doloribus itaque
            quaerat! Consequatur, consectetur perspiciatis.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
