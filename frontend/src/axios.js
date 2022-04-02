import axios from 'axios';
const baseURL = 'http://0.0.0.0:8080';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;