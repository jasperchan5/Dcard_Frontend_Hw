/* global __DEV__ */
import axios from 'axios';
const baseURL = 'https://jasper-repo-viewer.herokuapp.com';

const instance = axios.create({
  baseURL: baseURL
});

export default instance;