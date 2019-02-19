import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonBtn from "../../components/ButtonBtn";
import logo from "../../images/tracker.jpg";
import "./Home.css";
import Nav from "../../components/Nav";

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
        sourceImage:
          "data:image/png;base64,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",
        description: "Indeed Job Listing",
        postUrl: "https://www.indeed.com"
      },
      {
        sourceImage:
          "data:image/png;base64,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",
        description: "Built In Chicago Job Listing",
        postUrl: "https://www.builtinchicago.org/"
      },
      {
        sourceImage:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAzFBMVEX///8AAAAEeQMAdgC+vr7h4eHOzs7q6uoAcAD19fX4/Pj5+flVmlUUfRMAcwDl8uWbm5vv9+6Mjowegh0wMDBoaGh/gH/o6OikpKTw8PAICwjW1tbJ4cltbW252LlNTU0+Pj40NDR3d3cPDw9GRkY8PDxfX19TU1PIyMgmJiaTk5O2trYbHBtqa2oVFhWFhoWurq6rz6tuqG6gwqDW6NZQmlBAjj8vhi96r3nE2MSVwJSy0LFVm1RyrXLE3sR/qn+fv588kjzY49hFj0XCnls3AAAJyElEQVR4nO2be3+iuBqARQWltJZaFZGhCCJe0Gpv09nOnNnT2e//nU7InRCt3dPObuv7/NFfJSYkD7m8BKzVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4ifu7/959v/+na/Fv4uJHu1PQuLy9+3l/8k9X59/AyUOnTmg0OvWzr6dPV78ujtzMDVPCxXTqj6ffbl7dY5yCd6nibz/Tc6NeoRDTrj/e3l2dH1zOxiiw3rGmDBefqfmOZ6gakc106s9/fv9ycUA5g8/qpIFQzSAxNweU81mdNJ5/PD+eYQ+ynM7dAeV8UieNq+LAyfmXq5unbw+X9Xa7jeW0j9dJQxkiJyf3V3dPf94+XB6vk7Mdi8zJQeHK8Ti5vz8/v7APKedonJw8tjuNevvLAeUcj5PTYvUBJzI7nfg+GVAts6D4T+vEsdEX9WG447MyVFAeX5fHtsn3dU5sfRZ6nvIRr6iyT7PxKjheq9XCn5y/48TsZuM4CreohL5hjIzrVk3nxHTDLI3jNEuGptq87QAn9TdNpcLBch3FcTxL3HIef7iO0igctjROzCLPdJYMlbLQefJkFsfjbDOXvo2qPDKG6Hq662garV2PnHiyWs3cLfovOcjJVal2icFwCyfoFDonZmhIZLIsfyMnJYFIyadSQroVCS4/OqgNy06sTGQZeKXquxOeEvPvm6TqjqjEpnDpeJHrDFEDNsarnQQ9qdrRbJeTfGKU6YoSFkpSSFvihErCijVEarYRhyUng1KOieSxNSufxZadJGMpKccJs2GhG13xF5z8pTppxUYFjZNm9VsuTfJHlaQFGSebaqaNpt2G7MRVj+espl6qpGSyExlyuZzCSewa+audJJUStU62mq/R0a52hgLsxNIkLHcIZk7m1QQ2fLJKykDvhLpyIuRkVTPt146dFi8pFZ1PN3bmeIBEXXc5YNdrWapSOuhu+tfkfzID9smHVdJdsp6d4AQ+Bhbj67ITP2YfYz6kE+WqrMa8YwZlJ6PxCv0ds5l5btZMVKqTS04uq9skFSdD1j608tlsCtPOsf7ayOjSYZNBkTqihBm9mlbR72h3J4XReaflokZGJYvL4jQBE4Sd0JEzbqKifXdFPplSaUZSnMiiutdyceOihCCM1TWxVnvBya2yFpOWj+hgtla7nSDffO33caeZ2KIEPuprZkYnGlLXmZC6jFr4Hzp06OzpjCUnpJuk9EoHpEPg8uhAHNLCyFWZeMJJSq9KZf1+0QnpJ7/4ASJ8yT5u9ziRIWMbOwmla1mCtGIgHaFRGOkMMTs6F05s0lK+mA+FVpIpZCk2GVpz4WRfxL3fyQ/shCc4pOe2+OfeYU5C4SSRL7pMoPQTzqB0xWu1MXdCsmQ8xcb9NnZ4JhGqufxiEifTXT4KDuknwgmeLxcijA4Pc7IWTsi1nLhBJRgn1y+be8rdQF+MFamw4nNTjBUCrt7K5BdP3DwQfQl3IvfHv+WEjx07xo5FnXfHsWiatLZDylTUkE/7cTrL+olr8QHNFs/FFKWE3aYnn0MqucudbBVbtBOir9pTpaIeTunzCogQ8v92gsfKWJwq2+nEG6wMBVtqoiBmo0KNNUaJJzKISUO631GifGnE2CQUeEcnfN053IkuaCNO/MrxPi2vGsda+51U7ga7zIk/UZz4v8/JrrGTa5Sw0W2qQTdfHpaVLMEBTqR7Xt5PKk7s3+dkxxyruacRTtB9v2qFqbQy5f4w5E7E6q2OnYoTSzN23ryf8Di24iTRO6HxZeTmzWYzz/Oo5AQtC0FzuAlnUxaqJzzFm+fuJoyYmmuT9UXRT5aKE3U+Kb5aWQzefD4RTnBssHhp7NjYwUJc2kRxwjFJyqiS4Oc8DOkrvSHhJsgIFZELuTMqPDq4BtfqWhy+gxO67PPl01lonbQmymn7u5xUAwkOmaXdasyWcicWv/gUXJ1FUT0iTnSuITfx1k5o4/jdCqlUxYnHmqNruD/gYXCNVx5bznM5gQRkSzYQI3Y8uOZOyF266I8ky7j4lwywDS8t4ple5eTsACek5T1aCz9SnZAe3lIqRGJu4gTlSaXIzifhXDEat6WQlKpw+RrGMtH9FzyLLEodhd7U4MmJZJoo66D5aicH7J/Q1ZJsCgZ0+ZCc5FJDJ3wKoDUqnPg4T8gurUMC9UWNjpUp7yriVo9MBcY1PiffRsWfSDxiZDi4s6ayPFo1fGPl0C0OfGf0Rk5+8gO0fqgVfbGjiZ2wpSZMHL5ZOHbnljVfsu0e5KTFMk2Xzfm8OaA7MEuxMzMJ8/l8zlbrBWqtzVbuRbiZ8W1e7MRksXKahOwsM7ICdFmmLEzLed7GifQsoxJvMSdi59CX1JVATix165pg1hzdpibdlajsufL26ZJYiBRXUsgN9Ns70W2aYic+fwxRzJe6TVc8dqypJgFPI5odaiPCU5CtuxDESWWrX0xJczVu7LXeyUl5w3g15k5EAn5aomsGecpWDeBpM6yxmsDiUP+6dFRyUrEvzdJWKZcxpvfZ7+CEz6xGsdkpYjY0SY6EE7YHS78n7bOhSm1Kd8xrvpQ6NN6l9ERI4ouWp6Zy57eVHjhFpf0bX96677IQ6D2c1JztrDcyJnHfkuNYhDfsR+k4Yk1fFl8zruMkcAZpFEUzHpi1mut0gWaWSW9WfgTqBN1ZD13e0SJdl5+azvvo+KiX5U5tO0aFSeu5v8V5VtP+XN2mspJ0garai5biNB7OPqzt4fVOikYFQYCrjK/EtVT70ourXmBZpm4TuHgUidKCliYFlW0FZvWJuI/Oqfs+zmMGgal9Iu+glMDTpexhv5Ov+9+1cPAomB700s4HYq+Tc5wgxScKJBgLdyV/VPY6ecIvnpffK/CyDRsOJllY947Nj8g+J/dnpJ/IY8dC03xKJv2czvi7RvmHZbeTi5s6eW+4Ld0c0sBxlQwyFpImtc/GDicXf5zW6S82Go/iXVDNc/zFp+smWicnv749infLS6+WV6LQ0VxT6Aen6uT86a9OR3rb/rn0yvBWuY34hEpUJxc3D7KQeqdzqmw1efIdRqiPyD44kpOLi+9oEpGENDr1b5rfTgabGYrVUKDtal4P+AxITm4fS7/eaTS+Pu14Bd9p8VdMPyMlCdKHTuPhj2P9qWRdR6Nd39VFjgGNkU7j9OZYuwim0kU6l/859l9eV4zcHfGgoZSENG4P+VnKp+eW/zS/83jM86rM/RlegTv1H98P+Wn1cfDzsvi5uS5ePWa+/AQhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAczv8AtfLAlO23m0UAAAAASUVORK5CYII=",
        description: "Glassdoor Job Listing",
        postUrl: "https://www.glassdoor.com/index.htm"
      },
      {
        sourceImage:
          "data:image/png;base64,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",
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
        <img src={profile.sourceImage}/>

        <a href={profile.postUrl} target="_blank">
          <div>{profile.description}</div>
        </a>
      </div>
    ));
  };

  render() {
    return (
      <div className="top-container">
        <Nav />
        <div className="purple-gradient-bkgd colored-background">&nbsp;</div>
        <div className="container jumbo">
          <div className="row">
            <div className="five columns jumbo-text">
              <div className="title">
                <h1>Organization Tools</h1>
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