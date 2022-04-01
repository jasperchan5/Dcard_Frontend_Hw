import axios from 'axios';
const baseURL = process.env.NODE_ENV === 'production' ? 'https://jasper-repo-viewer.herokuapp.com:80'
                                                      : 'http://localhost:80';
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL,
});

export default instance;