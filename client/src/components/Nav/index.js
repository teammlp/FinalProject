import React from "react";
// require('./Nav.css');

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">
  <img src="https://clipart.info/images/ccovers/1521073957easter-egg-hunt-clipart-png.png" width="30" height="30" className="d-inline-block align-top" alt="cute chicken" />
  &nbsp; ezHunt</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav justify-content-end">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Jobs</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/jobLists" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Jobs
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/">Add Job</a>
          <a className="dropdown-item" href="/">Job History</a>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item active" >
        <a className="nav-link" href="/" id="Logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;