import axios from 'axios';
const baseURL = 'https://jasper-repo-viewer.herokuapp.com';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;