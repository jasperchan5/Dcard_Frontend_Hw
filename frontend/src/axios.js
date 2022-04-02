import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jasper-repo-viewer.herokuapp.com:8080'
});

export default instance;