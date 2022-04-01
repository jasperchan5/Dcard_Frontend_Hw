import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import http from "http";
import router from './backend/src/router.js';
import wakeUpDyno from './backend/src/wakeUpDyno.js';
import dotenv from 'dotenv-defaults';

const app = express();

// init middleware
app.use(cors());

// define routes
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
app.use('/getRepos', router);
app.use('/getSingleRepo', router);
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
console.log(path.join(__dirname, "frontend", "build", "index.html"));
// define server
dotenv.config();
const port = process.env.PORT || 8080;
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  const DYNO_URL = "https://jasper-repo-viewer.herokuapp.com";
  wakeUpDyno(DYNO_URL);
  console.log(`🚀 Server Ready at ${port}! 🚀`);
});