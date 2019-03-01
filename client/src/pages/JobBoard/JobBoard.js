
import React, { Component } from 'react';
// import Link from '../../components/Link';
import './JobBoard.css'
import axios from 'axios';
import Carousel from '../../components/Carousel';


export default class JobBoard extends Component {
  state = {
    results: [],
    keyword: "",
    location: "",
    locT: "C",
    locId: "",
    options: [],
    showOptions: true
  };

  constructor(props) {
    super(props);
    this.locationField = React.createRef();
  }

  componentDidMount() {
    axios.get('https://www.glassdoor.com/Job/jobs.htm?sc.keyword=Software%20Developer&locT=C&locId=1128808&locKeyword=Chicago,%20IL&srs=RECENT_SEARCHES')
      .then(res => {
        const jobTitle = res.data
        console.log(jobTitle)
        this.setState({ results: jobTitle, 
        company:"",
        location: "",
        description: "",
        position: "",
        date: ""
      
      })

      })
  }

  locationChangeHandler = (e) => {
    const location = e.target.value;
    this.setState({ location, showOptions: true }, () => {
      if (location.length >= 3)
        axios.get(`api/jobs/complete?term=${location}`)
          .then(
            res => this.setState({ options: res.data })
          )
      else
        this.setState({ options: [], showOptions: true })
    });
    console.log(this.locationField.current.getBoundingClientRect())
  }

  get dropdownStyle() {
    if (this.state.options.length && this.state.showOptions) {
      const rect = this.locationField.current.getBoundingClientRect();
      return {
        display: this.state.options.length ? "block" : "none",
        positon: "absolute",
        left: rect.left,
        top: rect.bottom,
        cursor: "pointer"
      }
    }
    return {};
  }

  changeHandler = ({ target }) => this.setState({ [target.name]: target.value })

  sumbitHandler = event => {
    event.preventDefault();
    axios.get("/api/jobs/search", {
      keyword: this.state.keyword,
      locT: this.state.locT,
      locId: this.state.locId
    })
      .then(res => console.log(res.data));
  }

  render() {
    return (

      <div>
        <Carousel/>
        {/* <Link /> */}
        
        <form onSubmit={this.sumbitHandler}>
          <label>Keyword</label>
          <input name="keyword" type="text" onChange={this.changeHandler} />
          <label>location</label>
          <input
            name="location"
            type="text"
            autoComplete="off"
            onChange={this.locationChangeHandler}
            ref={this.locationField}
            value={this.state.location}
          />

          <ul className="dropdown-menu" style={this.dropdownStyle}>
            {this.state.options.map(opt =>
              <li onClick={() => this.setState({ 
                location: opt.label, 
                locT: opt.locationType,
                locId: opt.locationId,
                showOptions: false 
                })}>
                {opt.label}
              </li>)
            }

          </ul>
          <input type="submit"/>
        </form>
        <ul>{JobBoard.jobTitle}</ul>

        <a href="/" onClick={() => this.props.history.goBack()} id="back-link">← Back to main page</a>
      </div>


    );
  };


}