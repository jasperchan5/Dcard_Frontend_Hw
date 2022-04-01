import axios from 'axios';
import dotenv from 'dotenv-defaults';
dotenv.config();

const PORT = process.env.PORT;
console.log(PORT);
const baseURL = 'https://jasper-repo-viewer.herokuapp.com:' + PORT;
console.log(baseURL);
const instance = axios.create({
  baseURL: baseURL
});

export default instance;