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
                                    <h5><a className="Link" href={place.link} target="_blank">♾ || {place.name} || ♾</a></h5>
                                    <Row>
                                        <Col size="md-4" >
                                        <a className="Link" href={place.link} target="_blank"><img className="img-thumbnail place_image" alt={place.name} src={place.image}/></a>
                                        </Col>
                                        <Col size="md-8" >
                                            <p className="location"><i className="fas fa-map-marker-alt">&nbsp;&nbsp; &nbsp;</i>{place.location}</p>
                                            <p className="phone"> 📞 &nbsp;&nbsp; {place.phone}</p>
                                        <div className="rating-link">
                                        <p className="rating"> <i className="fas fa-stars"></i>Rating 🌟: {place.rating}</p>
                                        <p><a className="Link" href={place.link} target="_blank"><button class="btn btn-primary"> Yelp &nbsp;<i className="fab fa-yelp"></i></button></a></p>
                                        </div>
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
        </>
    )
}
export default SearchPlaceResult