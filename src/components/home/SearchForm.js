import React, { Component } from 'react';
import {connect} from "react-redux";

import { fetchMovies, searchMovie } from "../../actions/searchActions";

 class SearchForm extends Component {

  handleOnChange = (e) => {
    this.props.searchMovie(e.target.value);
  }

  handleOnClick = () => {
    this.props.fetchMovies(this.props.text, this.props.page);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h2 className="display-4 mb-3">
            Search Here ..
          </h2>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search Here ..."
            value={this.props.text}
            onChange={this.handleOnChange}
          />
          <button className="btn btn-danger btn-bg mt-3" onClick={this.handleOnClick}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.searchReducer.text,
    page: state.searchReducer.page,
  }
}
export default connect(mapStateToProps, {fetchMovies, searchMovie})(SearchForm);