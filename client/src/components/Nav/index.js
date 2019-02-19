import React from "react";
require("./nav.css");

function Nav() {
  return (
    <div className="full-width-container header">
      <div className="row">
        <div className="four columns">
          <span className="logo">
            <a href="/">
              <img
                src="https://cdn3.iconfinder.com/data/icons/business-and-office-2-2/96/54-512.png"
                alt="job application" width="50" height="50" className="d-inline-block align-top" alt="cute chicken"
              />
              &nbsp; <span id="ezHunt">ezHunt</span>
            </a>
          </span>
        </div>
        <div className="eight columns menu" id="menu">
          <div className="row">
            <div className="four columns">
              <a
                onclick="trackEvent('landing_go_to_advisor_page_clicked')"
                href="#carouselExampleControls"
              >
                JOBS
              </a>
            </div>
            <div className="two columns">
              <a href="/app/talks">TODO</a>
            </div>
            <div className="two columns">
              <a
                onclick="trackEvent('landing_pricing_clicked')"
                href="#about"
                className="login"
              >
                About
              </a>
            </div>
            <div className="two columns">
              <a
                onclick="trackEvent('landing_login_clicked')"
                href="/login"
                className="login"
              >
                LOGIN
              </a>
            </div>
            <div className="two columns">
              <a
                onclick="trackEvent('landing_signup_clicked')"
                href="/register"
                className="login"
              >
                SIGNUP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
