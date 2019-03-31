import axios from 'axios';

const KEY = "AIzaSyApZfjI4yU7InmfnQE4pH3CUW9-l6t2ZSk";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY

    }
});