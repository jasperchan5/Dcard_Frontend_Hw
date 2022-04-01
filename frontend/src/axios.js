import axios from 'axios';
const baseURL = window.location.hostname;
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;