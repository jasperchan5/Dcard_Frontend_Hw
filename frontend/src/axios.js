import axios from 'axios';
const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:80' : 'https://jasper-repo-viewer.herokuapp.com:80';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;