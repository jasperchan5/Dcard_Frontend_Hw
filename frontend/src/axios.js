import axios from 'axios';
const baseURL = 'https://jasper-repo-viewer';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;