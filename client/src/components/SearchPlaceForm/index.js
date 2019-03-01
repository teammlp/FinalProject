import React from "react";
import { Col, Row } from "../../components/Grid";
import { Input } from "../../components/Form";
import ButtonBtn from "../../components/ButtonBtn";
import "./style.css";

const SearchPlace = props => {
    return (
        <>
        <Row>
            <Col>
            <h2 className="placeHeader text-center">
                Find Place Near You To Make A Connection With Others!
            </h2>
            <br/>
            </Col>
        </Row>
        <div className="SearchForm">
        <Row >
            <Col size="md-6">
            <label>Location: <i className="fas fa-map-marker-alt"></i></label>
            <Input  className="location"
                label="your location"
                value={props.location}
                type="text"
                name="location"
                placeholder="Enter Location ..."
                onChange={props.handleInputChange}
                icon="location_on"
            />
            </Col>
            <Col size="md-6">
             <label>Place Name: <i className="fas fa-building"></i> </label>
            <Input className="term"
                label = "library, coffee shop"
                value={props.term}
                type="text"
                name="term"
                placeholder="Coffee shop, Library, Gym ..."
                onChange={props.handleInputChange}
                icon = "location_city"
            />
            </Col>
        </Row>
        </div>
        <Row>
            <Col>
            <ButtonBtn type="submit" className="SearchButton" onClick={props.handleFormSubmit}>
                Find it...
            </ButtonBtn>
            </Col>
        </Row>
        </>
    )
}

export default SearchPlace