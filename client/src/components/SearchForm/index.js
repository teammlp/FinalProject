import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="JobSearchLabel"><h3>Search here...</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchJob"
                    placeholder="Search here..."
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-secondary" onClick={props.handleFormSubmit}>
                Click me!
            </button>
        </form>
    )
}



export default SearchForm