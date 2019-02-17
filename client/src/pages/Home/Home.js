import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ButtonBtn from "../../components/ButtonBtn";
import logo from "../../images/tracker.jpg";
import './Home.css';
import Nav from "../../components/Nav";

class Home extends Component {

    logout = () => {
        this.props.deAuthenticate();
        sessionStorage.removeItem("userAuth");
        sessionStorage.removeItem("userUsername");
        window.location.reload();
    }

    profilesList = () => {
        let profiles = [
            {
                sourceImage: "https://odsc.com/wp-content/uploads/2015/12/Indeed-Logo-1-1.jpg",
                description: "Indeed Job Listing",
                postUrl: "https://www.indeed.com"
            },
            {
                sourceImage: "https://odsc.com/wp-content/uploads/2015/12/Indeed-Logo-1-1.jpg",
                description: "Built In Chicago Job Listing",
                postUrl: "https://www.builtinchicago.org/"
            }
        ];
        return profiles.map((profile) =>
            <div style={{ textAlign: "center" }} className={profiles[0] === profile ? "carousel-item active" : "carousel-item"}>
                <div>
                    {profile.sourceImage} 
                </div>
                <a href={profile.postUrl}>
                    <div>
                        {profile.description}
                    </div>
                </a>
            </div>
        );
    }

    render() {
      return (
        <div className="top-container">
           <Nav />
             <div className="purple-gradient-bkgd colored-background">&nbsp;</div>
                  {/* <div className="homeLogo">
                      <img alt="logo" src={logo} />
                  </div> */}
                 <div> {/* add className here? */}
                  <ButtonBtn><Link to={"/login"}>LOGIN</Link></ButtonBtn>
                  <ButtonBtn><Link to={"/register"}>REGISTER</Link></ButtonBtn>
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                         <div className="carousel-inner">
                             {this.profilesList()}
                         </div>
                         <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                             <span className="sr-only">Previous</span>
                         </a>
                         <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
                             <span className="sr-only">Next</span>
                         </a>
                     </div>
                    <script>
                        $('.carousel').carousel();
                 </script>
                </div>
            </div>
        )
    }
}


export default Home;

