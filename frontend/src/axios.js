import axios from 'axios';
const baseURL = 'https://0.0.0.0:8080';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;