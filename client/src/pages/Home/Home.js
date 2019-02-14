import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ButtonBtn from "../../components/ButtonBtn";
import logo from "../../images/tracker.jpg";
import './Home.css';
import Nav from "../../components/Nav"

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
                source: "Indeed",
                description: "Todays Job Listing",
                postUrl: "https://www.indeed.com/viewjob?jk=bcbb008d958aa019&tk=1d3i2k7k3agdr800&from=serp&vjs=3&advn=7563612448552419&adid=141554971&sjdu=i6xVERweJM_pVUvgf-Mzud6v7vx4W2vba62rTobId36J1r29Sj03s_2Kk7DbjLum"
            }
        ];
        return profiles.map((profile) =>
            <div className={profiles[0] === profile ? "carousel-item active" : "carousel-item"}>
                <a href={profile.postUrl}>
                    {profile.source}

                    <div>
                        {profile.description}
                    </div>
                </a>



            </div>
        );
    }
    render() {
      return (
        <div class="container-fluid">
          <Nav />
              <div className="homeContain">
                  <div className="homeLogo">
                      <img alt="logo" src={logo} />
                  </div>
                 
                  <ButtonBtn><Link to={"/login"}>LOGIN</Link></ButtonBtn>
                  <ButtonBtn><Link to={"/register"}>REGISTER</Link></ButtonBtn>
                  
              </div>
          </div>
      )
  }
}


export default Home;