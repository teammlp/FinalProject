import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from "../../components/Grid/index";
import Jumbotron from "../../components/Jumbotron/index";
require('./NoMatch.css');


function NotFound() {
    return (
        <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404: Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <h2 id="not-found-h2"><Link to="/">Go back Home</Link></h2>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;