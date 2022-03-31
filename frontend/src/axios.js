import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jasper-repo-viewer.herokuapp.com',
});

export default instance;