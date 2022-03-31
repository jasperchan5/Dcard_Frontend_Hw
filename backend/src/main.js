import express from 'express';
import cors from 'cors';
import router from './router.js';
import bodyParser from 'body-parser';
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

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
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// define server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}.`)
})