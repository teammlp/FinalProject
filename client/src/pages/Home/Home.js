import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonBtn from "../../components/ButtonBtn";
import "./Home.css";
import Nav from "../../components/Nav";
import IndeedImg from '../../images/Indeed-Logo-1-1.jpg';

class Home extends Component {
  logout = () => {
    this.props.deAuthenticate();
    sessionStorage.removeItem("userAuth");
    sessionStorage.removeItem("userUsername");
    window.location.reload();
  };

  profilesList = () => {
    let profiles = [
      {
        sourceImage: IndeedImg,
        description: "Indeed Job Listing",
        postUrl: "https://www.indeed.com"
      },
      {
        sourceImage: IndeedImg,
        description: "Built In Chicago Job Listing",
        postUrl: "https://www.builtinchicago.org/"
      },
      {
        sourceImage:
        IndeedImg,
        description: "Glassdoor Job Listing",
        postUrl: "https://www.glassdoor.com/index.htm"
      },
      {
        sourceImage: IndeedImg,
        description: "Stackoverflow Job Listing",
        postUrl: "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab"
      }
    ];
    return profiles.map(profile => (
      <div
        style={{ textAlign: "center", width: 370}}
        className={
          profiles[0] === profile ? "carousel-item active" : "carousel-item"
        }
      >
        <img src={profile.sourceImage} alt="sourceImage"/>

        <a href={profile.postUrl} target="_blank">
          <div>{profile.description}</div>
        </a>
      </div>
    ));
  };

  render() {

console.log('this is our pic we imported!!', IndeedImg);


    return (
      <div className="top-container">
        <Nav />
        <div className="purple-gradient-bkgd colored-background">&nbsp;</div>
        <div className="container jumbo">
          <div className="row">
            <div className="five columns jumbo-text">
              <div className="title">
                <h1>Organizational Tools</h1>
                <h3>for your job hunt</h3>
                <div> 
                  <ButtonBtn>
                    <Link to={"/login"}>LOGIN</Link>
                  </ButtonBtn>
                  <ButtonBtn>
                    <Link to={"/register"}>REGISTER</Link>
                  </ButtonBtn>
                  {/* <hr mt-5/> */}
                </div>
              </div>
              {/*end title */}
            </div>
            {/*end five columns jumbo-text */}

            {/* <div className="one column">&nbsp;</div> */}
            <div className="seven columns">
              <div className="screenshot-container">
                <div
                  id="carouselExampleControls"
                  className="carousel slide content"
                  data-ride="carousel"
                >
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <div className="carousel-inner">{this.profilesList()}</div>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div> 
                    {/*end carousel slide content*/}
                <script>$('.carousel').carousel();</script>
              </div>
                {/*end screenshot-container */}
            </div>
                {/* end seven columns menu */}
          </div>
            {/* end row*/}
        </div>
            {/*end container-jumbo */}
            {/*end top-container */}
      </div> 
    );
  }
}

export default Home;