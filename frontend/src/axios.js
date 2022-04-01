import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jasper-repo-viewer.herokuapp.com:80',
});

export default instance;