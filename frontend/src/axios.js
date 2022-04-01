import axios from 'axios';
const baseURL = window.location.protocol + '//' + window.location.hostname + ':80';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;