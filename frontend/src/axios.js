import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jasper-repo-viewer.herokuapp.com',
});

export default instance;