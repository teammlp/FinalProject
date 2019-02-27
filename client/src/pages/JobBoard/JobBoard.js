
import React, { Component } from 'react';
import Link from '../../components/Link';
import { userAPI } from "../../utils/API";
import Nav from "../../components/Nav";
import { Container, Row, Col } from "../../components/Grid";
// import { Input } from "../../components/Form";
import SearchForm from "../../components/SearchForm";
// import SearchResult from "../../components/SearchResult";


export default class JobBoard extends Component {

  state = {
    
    jobBoard: [],
    jobTitle: "",
    company: "",
    description: "",
    salary: "",
    link:"",
    dateAdded: "",
    user: null

};
//function to take value of what enter in the search bar
handleInputChange = event => {
  this.setState({ search: event.target.value })
}

//function to control the submit button of the search form 
handleFormSubmit = event => {
  event.preventDefault();
  // once it clicks it connects to the google book api with the search value
  userAPI.getJobBoardSearch(this.state.search)
      .then(res => {
          if (res.data.items === "error") {
              throw new Error(res.data.items);
          }
          else {
              // store response in a array
              let results = res.data.items
              //map through the array 
              results = results.map(result => {
                  //store each book information in a new object 
                  result = {
                      key: result.id,
                      id: result.id,
                      jobTitle: result.volumeInfo.jobTitle,
                      company: result.volumeInfo.company,
                      description: result.volumeInfo.description,
                      salary: result.volumeInfo.salary,
                      link: result.volumeInfo.infoLink,
                      dateAdded: result.volumeInfo.dateAdded
                  }
                  return result;
              })
              // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
              this.setState({ jobBoard: results, error: "" })
          }
      })
      .catch(err => this.setState({ error: err.items }));
}

handleSavedButton = event => {
  // console.log(event)
  event.preventDefault();
  console.log(this.state.jobBoard)
  let savedJobBoard = this.state.jobBoard.filter(jobBoard => jobBoard.id === event.target.id)
  savedJobBoard = savedJobBoard[0];
  userAPI.saveJobBoard(savedJobBoard)
      .then(this.setState({ message: alert("Your job is saved") }))
      .catch(err => console.log(err))
}

// componentDidMount() {
//   let userId = sessionStorage.getItem("userId");
//   this.setState({userId});
//   this.loadIncidents();
// }

// searchJobs = query => {
//   console.log("searching...")
//   userAPI.search(query)
//     .then(res => this.setState({ results: res.data.incidents }))
//     .catch(err => console.log(err));
// };

// handleSearchSubmit  = event => {
//   if(event.key === 'Enter') {
//     console.log("submittng...", event)

//     // event.preventDefault();
//     this.searchBikeIncidents(this.state.searchTerm);

//     this.setState({
//       blah: ""
//     });
//   }
// };

// loadIncidents = () => {
//   API.getIncidents()
//     .then(res => this.setState({ incidents: res.data }))
//     .catch(err => console.log(err));
// };

// handleInputChange = event => {
//   console.log('im here!')
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
//   // this.searchBikeIncidents(this.state.searchTerm);
// };

// deleteIncident = id => {
//   API.deleteIncident(id)
//     .then(res => this.loadIncidents())
//     .catch(err => console.log(err));
// };

    render() {
        return (
          <Container fluid>
                    <h2 className="">Search Job Here</h2>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                {/* <Container>
                    <SearchResult jobBoard={this.state.jobBoard} handleSavedButton={this.handleSavedButton} />
                </Container> */}
           
            <Link/>
            <a href="/" onClick={() => this.props.history.goBack()} id="back-link">← Back to main page</a>
            </Container>
        );
      }


}