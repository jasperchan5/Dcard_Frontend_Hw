import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from "http";
import router from './backend/src/router.js';
import wakeUpDyno from './backend/src/wakeUpDyno.js';
import dotenv from 'dotenv-defaults';

const app = express();

// init middleware
app.use(cors());

// define routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/backend', router);
app.use('/backend/getRepos', router);
app.use('/backend/getSingleRepo', router);

// define server
dotenv.config();
const port = process.env.REACT_APP_PORT || 8080;
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  const DYNO_URL = "https://jasper-repo-viewer.herokuapp.com";
  wakeUpDyno(DYNO_URL);
  console.log(`🚀 Server Ready at ${port}! 🚀`);
});