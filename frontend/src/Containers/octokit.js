import { Octokit } from "@octokit/core";
import dotenv from 'dotenv-defaults';
dotenv.config();
const auth = process.env.auth;
const octokit = new Octokit({
    auth: auth,
});

export default octokit;