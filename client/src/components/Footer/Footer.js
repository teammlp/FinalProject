import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div id="footer">
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          <a id="footer-text">Made with <span className="icon-heart" role="img">💜</span>by team MLP  </a>&copy; 2019
        </p>
      </div>
    </div>
    </div>
  );
}

export default Footer;
