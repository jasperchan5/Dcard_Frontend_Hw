import axios from 'axios';
const baseURL = process.env.NODE_ENV === 'production' ? 
            'https://jasper-repo-viewer.herokuapp.com:5000' : 
            'http://localhost:5000';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;