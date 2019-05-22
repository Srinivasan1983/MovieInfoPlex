import axios from 'axios';

const API_KEY = 'AIzaSyBiVHVTELDD1qhxtXqi5ydH26w3DHHTKeM';

const youtubeSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    key: API_KEY
  }
});

export default youtubeSearch;