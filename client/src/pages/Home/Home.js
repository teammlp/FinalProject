import React, { Component } from "react";
import { Link} from 'react-router-dom';
import ButtonBtn from "../../components/ButtonBtn";
import logo from "../../images/tracker.jpg";
import './Home.css';

class Home extends Component {

    logout = () => {
        this.props.deAuthenticate();
        sessionStorage.removeItem("userAuth");
        sessionStorage.removeItem("userUsername");
        window.location.reload();
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
                  
              </div>
          </div>
      )
  }
}


export default Home;