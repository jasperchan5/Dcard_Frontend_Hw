import axios from 'axios';
const PORT = process.env.PORT;
const baseURL = 'https://jasper-repo-viewer.herokuapp.com:' + PORT;
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;