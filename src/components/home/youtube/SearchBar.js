import React, { Component } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <SearchWrapper>
        <div>
          <form id="searchForm" onSubmit={this.onSearchSubmit}>
            <input
              type="text"
              value={this.state.term}
              className="form-control"
              name="searchText"
              placeholder="Search video"
              onChange={event => this.setState({ term: event.target.value })}
            />
            <button type="submit" className="btn btn-warning mt-3">
              <i className="fas fa-search" /> Search
            </button>
          </form>
        </div>
      </SearchWrapper>
    );
  }

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchTermChange(this.state.term);
  };
}

export default SearchBar;

const SearchWrapper = styled.div`
  .form-control {
    border-radius: 1rem;
  }
`;
