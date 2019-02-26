import React, { Component } from "react";
import { userAPI } from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
// import SearchForm from "../../components/SearchForm";
// import SearchResult from "../../components/SearchResult";
import Link from '../../components/Link';


class JobBoard extends Component {
    //create state
    state = {
        search: "",
        jobBoard: [],
        error: "",
        message: ""
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
                        
                        result = {
                            key: result.id,
                            id: result.id,
                            company: result.volumeInfo.company,
                            position: result.volumeInfo.position,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    
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
    render() {
        return (
            <Container fluid>
                    <h1 className="">Search job below...</h1>
                <Container>
                    <Row>
                        <Col size="12">
                            {/* <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            /> */}
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    {/* <SearchResult jobBoard={this.state.jobBoard} handleSavedButton={this.handleSavedButton} /> */}
                </Container>
                <div>
                  <Link/>
                  <a href="/" onClick={() => this.props.history.goBack()} id="back-link">← Back to main page</a>
                </div>
            </Container>
        )
    }


}

export default JobBoard



// import React, { Component } from 'react';
// import Link from '../../components/Link';


// export default class JobBoard extends Component {

//     render() {
//         return (
//           <div>
//             <Link/>
//             <a href="/" onClick={() => this.props.history.goBack()} id="back-link">← Back to main page</a>
//           </div>
//         );
//       }


// }