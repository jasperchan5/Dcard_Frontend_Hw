import express from 'express';
import cors from 'cors';
import router from './router';
import bodyParser from 'body-parser';

const app = express();

// init middleware
app.use(cors());

// define routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
app.use('/getRepos', router);
app.use('/getSingleRepo', router);

// define server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}.`)
})