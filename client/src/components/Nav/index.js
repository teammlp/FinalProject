import React from "react";
// require('./Nav.css');

function Nav() {
  return (
    <div className="full-width-container header">
      <div className="row">
        <div className="four columns">
          <span className="logo">
            <a href="/">
              <img
                src="https://clipart.info/images/ccovers/1521073957easter-egg-hunt-clipart-png.png"
                alt="job application" width="50" height="50" className="d-inline-block align-top" alt="cute chicken"
              />
              &nbsp; ezHunt
            </a>
          </span>
        </div>
        <div className="eight columns menu">
          <div className="row">
            <div className="four columns">
              <a
                onclick="trackEvent('landing_go_to_advisor_page_clicked')"
                href="/advisors"
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
                href="/pricing"
                className="login"
              >
                NOTES
              </a>
            </div>
            <div className="two columns">
              <a
                onclick="trackEvent('landing_login_clicked')"
                href="/home"
                className="login"
              >
                LOGIN
              </a>
            </div>
            <div className="two columns">
              <a
                onclick="trackEvent('landing_signup_clicked')"
                href="/signup"
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
