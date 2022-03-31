import express from 'express'
import octokit from './octokit.js';

const router = express.Router();

router.get('/', (req,res) => {
    
})

router.get('/getRepos', async(req,res) => {
    const userName = req.query.username;
    const repoList = await octokit.request(`GET /users/${userName}/repos?per_page=100`);
    res.status(200).send({repoList: repoList});
})

router.get('/getSingleRepo', async(req,res) => {
    const userName = req.query.username, repoName = req.query.reponame;
    const repoInfo = await octokit.request(`GET /repos/${userName}/${repoName}`);
    res.status(200).send({repoInfo: repoInfo});
})

export default router;