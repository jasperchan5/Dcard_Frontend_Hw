import axios from 'axios';
const baseURL = process.env.NODE_ENV === 'production' ? 'https://jasper-repo-viewer.herokuapp.com:8080' : 'http://localhost:8080';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;