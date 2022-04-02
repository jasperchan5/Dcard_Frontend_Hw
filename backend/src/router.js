import express from 'express'
import octokit from './octokit.js';
import dotenv from 'dotenv-defaults';
const router = express.Router();

dotenv.config();

router.get('/api', async(req,res) => {
    const userName = "mars";
    console.log(`Fetching ${userName}'s repo list!`);
    const repoList = await octokit.request(`GET /users/${userName}/repos?per_page=100`);
    console.log("Repo count:",repoList.data.length);
    res.status(200).send({repoList: repoList});
})

router.get('/api/getRepos', async(req,res) => {
    const userName = req.query.username;
    console.log(`Fetching ${userName}'s repo list!`);
    const repoList = await octokit.request(`GET /users/${userName}/repos?per_page=100`);
    console.log("Repo count:",repoList.data.length);
    res.status(200).send({repoList: repoList});
})

router.get('/api/getSingleRepo', async(req,res) => {
    const userName = req.query.username, repoName = req.query.reponame;
    console.log(`Fetching information of ${userName}'s repo ${repoName}!`);
    const repoInfo = await octokit.request(`GET /repos/${userName}/${repoName}`);
    res.status(200).send({repoInfo: repoInfo});
})

export default router;