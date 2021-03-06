import { Octokit } from '@octokit/core';
import dotenv from 'dotenv-defaults';
dotenv.config();

const AUTH = process.env.AUTH;

const octokit = new Octokit({
    auth: AUTH
});

export default octokit;