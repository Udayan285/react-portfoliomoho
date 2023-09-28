import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

function Service() {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research and Analysis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information Architecture and Wireframing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping and Interaction Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive and Mobile Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accessibility Integration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX Audits and Consultation.</p>
            </li>
          </ul>
        </article>
        {/* ==============END OF UI/UX============ */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Laravel Application Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Laravel Website Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development and Integration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Development with Laravel.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management Systems (CMS) with Laravel.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Laravel Migration and Upgrades.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of Third-Party Services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Real-Time Applications with Laravel.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Laravel Enterprise Solutions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Laravel Customization and Extension.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Laravel Testing and Quality Assurance.</p>
            </li>
          </ul>
        </article>
        {/* =======================END OF WEB DEVELOPMENT========== */}
        <article className="service">
          <div className="service__head">
            <h3>Front End Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive Design Elements.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Icon and Graphics Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Typography and Color Selection.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design System Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Branding and Style Guides.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Consultation and Review.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Post-Launch Design Support.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing and Prototyping.</p>
            </li>
          </ul>
        </article>
        {/* ====================END OF CONTENT CREATION=================== */}
      </div>
    </section>
  );
}

export default Service;
