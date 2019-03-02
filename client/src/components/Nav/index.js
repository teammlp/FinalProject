import React from "react";
import { Link } from "react-router-dom"
import { FormBtn} from "../../components/Form";
require("./nav.css");


function Nav(props) {
  // will be null if user is not defined
  return (
    <div className="full-width-container header">
      <div className="row">
        <div className="three columns" id="logo-column">
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
          <div className="row" id="row-menu">
              <a href="/place" className="login" id="menu-n">NETWORK</a>
              <a href="/talks" className="login" id="menu-i">INSIGHTS</a>
            {props.user ?
              <>
                  <Link
                    to={{
                      pathname: "/userForm",
                      state:{user: props.user}
                    }}
                    id="nav-username"
                  >{props.user.username}
                  </Link>
               
                <a href="/task" id="menu-t">TASKS</a>
                <a href="#" onClick={props.logoutHandler} id="menu-lt">LOGOUT</a>
              </>
                :
                <>
                    <a href="/login" className="login" id="menu-l">LOGIN</a>
                    <a href="/register" className="login" id="menu-s">SIGNUP</a>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
