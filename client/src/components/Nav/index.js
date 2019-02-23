import React from "react";
import { Link } from "react-router-dom"
import { FormBtn} from "../../components/Form";
require("./nav.css");


function Nav(props) {
  // will be null if user is not defined
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
                onClick="trackEvent('landing_go_to_advisor_page_clicked')"
                href="/JobBoard"
              >
                JOBS
              </a>
            </div>
            <div className="two columns">
              <a
                onclick="trackEvent('landing_pricing_clicked')"
                href="#about"
                className="login"
              >
                ABOUT
              </a>
            </div>
            {
              props.user ?
              <div className="two columns">
                  <Link
                    to={{
                      pathname: "/userForm",
                      state:{user: props.user}
                    }}
                  >{props.user.username}
                  </Link>
              <a href="/task">TASKS</a>
                </div>
                
                :
                <>
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
                </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
