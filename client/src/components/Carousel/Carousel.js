import React from "react";
import "./Carousel.css";
import IndeedImg from '../../images/Indeed.jpeg';
import BuiltImg from '../../images/Built.png';
import StackImg from '../../images/Stack.png';
import GlassImg from '../../images/Glass.png';



    let profilesList = () => {
        let profiles = [
            {
                sourceImage: IndeedImg,
                description: "Indeed Job Listing",
                postUrl: "https://www.indeed.com"
            },
            {
                sourceImage: BuiltImg,
                description: "Built In Chicago Job Listing",
                postUrl: "https://www.builtinchicago.org/"
            },
            {
                sourceImage:GlassImg,
                description: "Glassdoor Job Listing",
                postUrl: "https://www.glassdoor.com/index.htm"
            },
            {
                sourceImage: StackImg,
                description: "Stackoverflow Job Listing",
                postUrl: "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab"
            }
        ];
        return profiles.map(profile => (
            <div
                style={{ textAlign: "center", width: 370 }}
                className={
                    profiles[0] === profile ? "carousel-item active" : "carousel-item"
                }
            >
                <img src={profile.sourceImage} alt="sourceImage" />

                <a href={profile.postUrl} target="_blank">
                    <div>{profile.description}</div>
                </a>
            </div>
        ));
    };


function Carousel() {
    return (
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
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <div className="carousel-inner">{profilesList()}</div>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/*end carousel slide content*/}
                <script>$('.carousel').carousel();</script>
            </div>
            {/*end screenshot-container */}
            {/* below, end seven columns menu */}
        </div>
    );
}


export default Carousel;
