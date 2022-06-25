import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="wrapper">
      <div className="site-link-section">
        <div className="manifesto container">
          <div className="manifesto-logo">
            <h3>Manifesto.ai</h3>
          </div>
          <div className="section-text">
            <h3>What is Manifesto.ai ?</h3>
          </div>
          <div className="description-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nihil hic, ut et saepe aliquclassName accusantium omnis molestias
              quos delectus provclassNameent veritatis eos incclassNameunt
              labore ea enim iure, placeat corrupti? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto, sint vitae inventore
              magni placeat tempore fuga modi maxime totam aperiam quas.
            </p>
          </div>
          <div className="input-section">
            <span className="newsletter  input-span">
              <label className="footer-input-label" htmlFor="newsletter">
                Newsletter
              </label>
              <button
                onClick={() => {
                  console.log("Hola Sambola");
                }}
                id="newsletter"
                className="subscribe-btn"
              >
                Subscribe
              </button>
            </span>
            <span className="email input-span">
              <label className="footer-input-label" htmlFor="email-input">
                Email Us
              </label>
              <input
                type="email"
                placeholder="Enter your mail id"
                id="email-input"
                className="email-input"
              />
            </span>
          </div>
        </div>
        <div className="domain container">
          <div className="head-text">
            <h3>Domain</h3>
          </div>
          <div className="link-section">
            <ul>
              <li className="footer-list-links">
                <a className="links" href="">
                  Banking
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Insurance
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Financial Market
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Health
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Sports
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Manifacturing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="career container">
          <div className="footer-subsection">
            <div className="head-text">
              <h3>
                <nobr>Services By Function</nobr>
              </h3>
            </div>
            <div className="link-section">
              <ul>
                <li className="footer-list-links">
                  <a className="links" href="">
                    Data Analyst
                  </a>
                </li>
                <li className="footer-list-links">
                  <a className="links" href="">
                    Data Scientist
                  </a>
                </li>
                <li className="footer-list-links">
                  <a className="links" href="">
                    Business Analytics
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="head-text">
              <h3>
                <nobr>Careers</nobr>
              </h3>
            </div>
            <div className="link-section">
              <ul>
                <li className="footer-list-links">
                  <a className="links" href="">
                    Opportunities
                  </a>
                </li>
                <li className="footer-list-links">
                  <a className="links" href="">
                    How we hire ?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ai-firm-section container">
          <div className="head-text">
            <h3>Ai-Firm</h3>
          </div>
          <div className="link-section">
            <ul>
              <li className="footer-list-links">
                <a className="links" href="">
                  Overview
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Features
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Repositories
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Comunity Forum
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  News
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Conference
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Stories
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Tech-Cast
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Founded By
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Our Teams
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  Contact
                </a>
              </li>
              <li className="footer-list-links">
                <a className="links" href="">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
