import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ButtonBtn from "../../components/ButtonBtn";
import "./Home.css";
import Nav from "../../components/Nav";
import { deserializeUser, logoutUser } from "../../utils/helpers";
// import Carousel from "../../components/Carousel/Carousel";

class Home extends Component {
  logout = () => {
    this.props.deAuthenticate();
    logoutUser();
    window.location.reload();
  };

  render() {
    const user = deserializeUser();
    if (user)
      return <Redirect to={{ pathname: "/userForm", state: {user} }} />
    return (
      <div className="top-container">
        <Nav />
        <div className="container jumbo">
          <div className="row">
            <div className="columns jumbo-text">
              <div className="title">
                <h1>Organizational Tools</h1>
                <h3>for your job hunt</h3>
                <div>
                  <ButtonBtn>
                    <Link to={"/login"}>LOGIN</Link>
                  </ButtonBtn>
                  <ButtonBtn>
                    <Link to={"/register"}>SIGNUP</Link>
                  </ButtonBtn>
                  {/* <hr mt-5/> */}
                </div>
              </div>
              {/*end title */}
            </div>
            {/*end five columns jumbo-text */}
            {/* <div className="one column">&nbsp;</div> */}
            {/* <Carousel /> */}
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
