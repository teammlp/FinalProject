import React from "react";

function Nav() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-secondary" role='navigation'>
      <div className="navbar-header">
        <button className="navbar-toggle" type='button' data-toggle='collapse' data-target='navbar-collapse'/>
          <span className="sr-only toggle navigation"/>
          <span className= "icon-bar"/>1
          <span className= "icon-bar"/>1
          <span className= "icon-bar"/>1
        <a className="navbar-brand navbar-collapse collapse"  href="#">EzHUNT</a>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="/">Home || </a>
          </li>
          <li>
            <a href="/users/register">Register || </a>
          </li>
          <li>
            <a href="/users/login">Login || </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/users/logout">Logout</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Nav;