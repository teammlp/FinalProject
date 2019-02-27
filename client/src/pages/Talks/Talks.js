import React, { Component } from 'react';
import { Container, Row, Col } from "../../components/Grid";
import Nav from "../../components/Nav";
// import Card from '../../components/Card';


require('./Talks.css');

export default class Talks extends Component {
  render() {
    return (
      <Container fluid>
        <Nav/>
        <hr/>
      <Row>
        <Col size="md-12">
        <h2>Talks</h2>
        <p className="text-center">Stories from job seekers and their journey to getting their dream jobs.</p>
        </Col>
      </Row>
      <Row>
        <Col>

        <div class="card-deck">
          <div class="card">
            <img src="https://cdn-images-1.medium.com/max/2600/1*nu0yZpgOPHSTkV_PiWzOpA.jpeg" class="card-img-top" alt="story1"/>
            <div class="card-body">
              <h5 class="card-title">My journey from first generation college grad to Software Engineer</h5>
              <article class="card-text">I am sharing my journey on how I learned the ins and outs of software development and how I finally landed my first Software Engineer role — so that others on a similar path will stay motivated to continue their journey. I hope to empower others to never give up on their hopes and dreams.</article>
            </div>
            <div class="card-footer">
            <a href="https://medium.freecodecamp.org/my-journey-to-becoming-a-software-engineer-4ae301fc02b" target="_blank" className="btn btn-secondary">Read full article...</a>
            </div>
          </div>
          <div class="card">
            <img src="https://cdn-images-1.medium.com/max/1600/1*dj_JFPtEe7wdGR3DlkXG_Q.png" class="card-img-top" alt="story2"/>
            <div class="card-body">
              <h5 class="card-title">How I became a programmer with the #100DaysofCode challenge</h5>
              <article class="card-text">As a child that grew up in the village, with no access to a regular power supply or the internet and, losing her Dad at a very young age, the idea of a modern world never left me.
          As a widow, my Mum understands the only chance I had as a girl child in the village is education.</article>
            </div>
            <div class="card-footer">
            <a href="https://medium.freecodecamp.org/how-i-became-a-programmer-with-the-100daysofcode-challenge-19b01f17bca1" target="_blank" className="btn btn-secondary">Read full article...</a>
            </div>
          </div>
          <div class="card">
            <img src="https://cdn-images-1.medium.com/max/2000/0*-V0Ttl49odU5zNz5" class="card-img-top" alt="story3"/>
            <div class="card-body">
              <h5 class="card-title">The things I wish I had done before my first job</h5>
              <article class="card-text">Before I landed my first paying role as a software developer, I had to learn how to stay fired up about working in tech. After graduating, it took me 9 months to get my first solid job.
          To survive in the joblessness, I delivered pizzas and did simple freelance projects.</article>
            </div>
            <div class="card-footer">
            <a href="https://medium.freecodecamp.org/the-things-i-wish-i-had-done-before-my-first-job-fe79c36e2211" target="_blank" className="btn btn-secondary">Read full article...</a>
            </div>
          </div>
        </div>
        </Col>
      </Row>
      </Container>
    );
  }
}