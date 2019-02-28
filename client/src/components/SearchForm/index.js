import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form id="jobSearchForm">
            <div className="form-group">
                <label className="JobSearchLabel"><h2>Search here...</h2></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchJob"
                    placeholder="Enter job name"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-secondary" onClick={props.handleSubmit}>
                Click me!
            </button>
        </form>
    )
}



export default SearchForm