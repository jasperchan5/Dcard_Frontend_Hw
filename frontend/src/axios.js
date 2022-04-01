import axios from 'axios';
const baseURL = 'http://localhost:80';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;