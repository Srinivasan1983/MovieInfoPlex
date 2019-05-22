import React, { Component } from "react";
import YTSearch from "../../../service/youTubeSearchService";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import ProgressBar from "./ProgressBar";

import styled from "styled-components";

class YoutubeLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.videoSearch("news");
  }

  render() {
    if (this.state.videos.length === 0) {
      return <ProgressBar />;
    }
    return (
      <YTLandingPageWrapper>
        <div className="App">
          <header className="App-header">
            <SearchBar onSearchTermChange={this.videoSearch} />
          </header>
          <div className="App-body">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      </YTLandingPageWrapper>
    );
  }

  videoSearch = term => {
    YTSearch.get(`/search?part=snippet&q=${term}`)
      .then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default YoutubeLandingPage;

const YTLandingPageWrapper = styled.div`
  .App {
    margin: 20px;
  }

  .App-header {
    width: auto;
    margin: 0 auto;
  }

  .App-body {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    margin-top: 20px;
  }
`;
