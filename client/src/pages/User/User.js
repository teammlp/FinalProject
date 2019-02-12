import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
import { userAPI} from "../../utils/API";
import ButtonBtn from "../../components/ButtonBtn";
import { FormBtn } from "../../components/Form";
import Navigation from "../../components/Navigation";

require('./User.css');

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userID: "",
            username: ""
        };
    }

    static contextTypes = {
        router: PropTypes.object,
    }

    componentDidMount() {
        if ((sessionStorage.getItem('userAuth') === 'yes') && sessionStorage.getItem("userUsername")) {
            if (sessionStorage.getItem("userID")) {
                this.setState({
                    username: sessionStorage.getItem('userUsername')
                });
            }
            this.getUserId(sessionStorage.getItem('userUsername'));
        }
    }

    getUserId = userUsername => {
        userAPI.getUser(userUsername)
            .then(res => {
                console.log("get username", res);
                this.setState({ userID: res.data._id });
            })
            .catch(err => console.log(err));
    }

    logout = () => {
        this.props.deAuthenticate();
        sessionStorage.removeItem("userAuth");
        sessionStorage.removeItem("userUsername");
        sessionStorage.removeItem("userID");
        window.location.reload();
    }

    render() {
        return (!(sessionStorage.getItem("userAuth") === 'yes') ?
            <Redirect to={{ pathname: '/login' }} /> :
            <div>
                <Navigation />
                <div className="UserWrap">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Current</h1>

                        </div>
                        <FormBtn onClick={this.logout}>logout</FormBtn>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;