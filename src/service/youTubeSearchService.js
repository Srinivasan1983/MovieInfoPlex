import axios from 'axios';

const API_KEY = 'AIzaSyAo49OMyIqSauKa01CTXrMtL_lk457Qj_s';

const youtubeSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    key: API_KEY
  }
});

export default youtubeSearch;