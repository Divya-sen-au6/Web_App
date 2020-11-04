import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h1 className="logo1">Landkit.</h1>
            <p>A better way to build.</p>
            <div class="social-media-wrap">
              <div class="social-icons">
                <Link
                  class="social-icon-link facebook"
                  to="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i class="fab fa-facebook-f" />
                </Link>
                <Link
                  class="social-icon-link instagram"
                  to="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i class="fab fa-instagram" />
                </Link>
                <Link
                  class="social-icon-link twitter"
                  to="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i class="fab fa-twitter" />
                </Link>
                <Link
                  class="social-icon-link twitter"
                  to="/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i class="fab fa-linkedin" />
                </Link>
              </div>
            </div>
          </div>
          <div class="footer-link-items">
            <h2>Products</h2>
            <Link to="/sign-up">Page Builder</Link>
            <Link to="/">UI Kit</Link>
            <Link to="/">Styleguide</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Changelog</Link>
          </div>
          <div class="footer-link-items">
            <h2>Services</h2>
            <Link to="/">Documentation</Link>
            <Link to="/">Changelog</Link>
            <Link to="/">Pagebuilder</Link>
            <Link to="/">UI Kit</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Connect</h2>
            <Link to="/">Page Builder</Link>
            <Link to="/">UI Kit</Link>
            <Link to="/">Styleguide</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Changelog</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Changelog</Link>
          </div>
          <div class="footer-link-items">
            <h2>Legal</h2>
            <Link to="/">Documentation</Link>
            <Link to="/">Changelog</Link>
            <Link to="/">Pagebuilder</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
