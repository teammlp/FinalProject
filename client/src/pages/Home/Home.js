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
            <div className="homeWrap">
                <div className="homeContain">
                    <div className="homeLogo">
                        <img alt="logo" src={logo} />
                    </div>

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

                </div>
                <script>
                    $('.carousel').carousel();
                </script>
            </div>
        )
    }
}


export default Home;