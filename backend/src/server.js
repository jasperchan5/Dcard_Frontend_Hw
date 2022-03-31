import express from 'express';
import cors from 'cors';
import router from './router.js';
import bodyParser from 'body-parser';
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import http from "http";
import wakeUpDyno from './wakeUpDyno.js';

const app = express();

// init middleware
app.use(cors());

// define routes
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
app.use('/getRepos', router);
app.use('/getSingleRepo', router);
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// define server
const port = process.env.PORT || 5000;
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  const DYNO_URL = "https://jasper-repo-viewer.herokuapp.com";
  wakeUpDyno(DYNO_URL);
  console.log(`🚀 Server Ready at ${port}! 🚀`);
});