import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const SearchResult = props => {
    return (props.jobBoard.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h1>Search Results <i className="fas fa-alt"></i></h1>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h1>Search Results || <i class="fas fa-alt"></i></h1>
                        {props.jobBoard.map(jobBoard => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={jobBoard.jobTitle + "Card"} key={jobBoard._id}>
                                       
                                        <Col size="2" className="jobImage">
                                            {/* <img src={jobBoard.image} alt={book.title} /> */}
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                      
                                        <Col size="9" className="Info">
                                            <Row>
                                                <h3 className="Title">{jobBoard.jobTitle}</h3>
                                            </Row>
                                            <Row>
                                                <h4 className="company">{jobBoard.company}</h4>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription">{jobBoard.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv ">
                                        <button className="saveJob btn btn-primary" id={jobBoard.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Job
                                        </button>
                                        <a href={jobBoard.link} target="_blank" rel="noopener noreferrer" >
                                            <button className="viewBook btn btn-success">
                                                View Job Detail
                                        </button>
                                        </a>
                                    </Row>
                                    <hr/>
                                </li>
                                
                            );
                           
                        })}
                       
                    </div>
                </div>
            </div>
        )
}
export default SearchResult