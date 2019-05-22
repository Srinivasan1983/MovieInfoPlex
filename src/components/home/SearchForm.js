import React, { Component } from "react";

import { connect } from "react-redux";

import styled from "styled-components";

import {
  searchMovie,
  fetchMovies,
  setLoading
} from "../../actions/searchActions";

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <SearchWrapper>
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <div className="container">
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Search Movies, TV Series ..."
                onChange={this.onChange}
              />
              <button type="submit" className="btn btn-warning btn-lg mt-3">
              <i className="fas fa-search"></i> Search
              </button>
            </form>
          </div>
        </div>
      </SearchWrapper>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);

const SearchWrapper = styled.div`
.jumbotron {
  background: transparent;
  padding-top: 7rem
}
.form-control {
border-radius: 1rem;
}

`;
