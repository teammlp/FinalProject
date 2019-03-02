import React, { Component } from "react";
import API from "../../utils/placeAPI";
import SearchPlaceForm from "../../components/SearchPlaceForm";
import SearchPlaceResult from "../../components/SearchPlaceResult";
import Nav from "../../components/Nav";
import { Container } from "../../components/Grid";
import {
    logoutUser,
    deserializeUser,
    serializeUser
  } from "../../utils/helpers";

class PlaceSearch extends Component {
    //create state
    state = {
        term: "",
        location: "",
        places: [],
        message: {}
    };

    componentDidMount() {
        const user = deserializeUser();
        this.setState({
          user: user,
          username: user && user.username
        });
      }
    
      logout = () => {
        this.props.deAuthenticate();
        logoutUser();
        this.setState({ user: null });
      };
    //function to take value of what enter in the search area
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        API.getPlaces({
            term: this.state.term,
            location: this.state.location
        })
            .then(res => {
                if (res.data.businesses === "error") {
                    throw new Error(res.data.businesses);
                }
                else {
                    let results = res.data.businesses
                    results = results.map(result => {
                        result = {
                            id: result.id,
                            key: result.id,
                            name: result.name,
                            location: result.location.display_address,
                            phone: result.display_phone,
                            rating: result.rating,
                            link: result.url,
                            image: result.image_url
                        }
                        return result;
                    })
                    // reset the sate of the empty array to the new arrays of objects with properties geting back from the response
                    this.setState({ places: results })
                }
            })
            .catch(err => console.log(err, "why error"));
    }

    render() {
        return (
            <>
            <Nav user={this.state.user} logoutHandler={this.logout} />
            <Container>
                <SearchPlaceForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <SearchPlaceResult places={this.state.places}
                    handleSavedButton={this.handleSavedButton}
                />
            </Container>
            </>
        )
    }
}

export default PlaceSearch