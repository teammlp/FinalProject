import React from "react";
import "./style.css";
import { Col, Row, Container} from "../../components/Grid";
import ButtonBtn from "../../components/ButtonBtn";

const SearchPlaceResult = props => {
    return (props.places.length === 0) ? (
        <></>
    ) : (
        <>
        <div className="resultContent">
        <Container>
            
            <Row>
                {props.places.map(place => {
                    return (
                        <Col key={place.id} size="md-12">
                            <div key={place.id} className="">
                                <div className="">
                                    <h5>♾ || {place.name} || ♾</h5>
                                    <hr/>
                                    <Row>
                                        <Col size="" >
                                            <img className="img-thumbnail place_image" alt={place.name} src={place.image} />
                                        </Col>
                                        <Col size="" >
                                            <p className="location">📍 Location: {place.location}</p>
                                            <p className="phone"> 📞 Phone: {place.phone}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="md-6">
                                        <p className="rating"> <i className="fas fa-stars"></i>Rating 🌟: {place.rating}</p>
                                        </Col>
                                        <Col size="md-6">
                                        <p><a className="Link" href={place.link} target="_blank">Website Link 🔗 </a><i className="fas fa-external-link"></i></p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
            
        </Container>
        </div>
            <hr/>
        </>
    )
}
export default SearchPlaceResult