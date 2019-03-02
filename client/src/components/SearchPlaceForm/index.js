import React from "react";
import { Col, Row } from "../../components/Grid";
import { Input } from "../../components/Form";
import ButtonBtn from "../../components/ButtonBtn";
import "./style.css";

const SearchPlace = props => {
  return (
    <>
    <Row>
          <Col size="md-12" id="dashboard">
            <div className="dashboard">
              <h1 id="h1-dashboard">Connect with others!
              <br />
              <h3 id="h3-dashboard">Search for networking opportunities near you </h3>
              </h1>
            </div>
          </Col>
        </Row>
      {/* <Row>
        <Col>
          <h2 className="placeHeader text-center">
            Connect With Others — Find A Place Near You!
          </h2>
          <br />
        </Col>
      </Row> */}

      <div className="SearchForm">
        <Row>
          <Col size="md-6">
            <label>
              Location: <i className="fas fa-map-marker-alt" />
            </label>
            <Input
              className="location"
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
            <label>
              Place Name: <i className="fas fa-building" />{" "}
            </label>
            <Input
              className="term"
              label="library, coffee shop"
              value={props.term}
              type="text"
              name="term"
              placeholder="Coffee shop, Library, Gym ..."
              onChange={props.handleInputChange}
              icon="location_city"
            />
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <ButtonBtn
            type="submit"
            class="btn btn-primary"
            onClick={props.handleFormSubmit}
          >
            Search
          </ButtonBtn>
        </Col>
      </Row>
      {/* <!-- This row will handle all of the retrieved articles --> */}
      <div class="row">
        <div class="col-sm-12">
          <br />

          {/* <!-- This card will initially be made up of a card and wells for each of the articles retrieved --> */}
          <div class="card">
            {/* <!-- card Heading for the retrieved articles box --> */}
            <div class="card-header">
              <strong id="card-text">
                <i class="fa fa-table" /> Top Searches
              </strong>
            </div>

            {/* <!-- This main card will hold each of the resulting articles --> */}
            <div class="card-body" id="article-section" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPlace;
