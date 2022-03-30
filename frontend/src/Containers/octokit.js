import { Octokit } from "@octokit/core";

// const AUTH = process.env.AUTH;

const octokit = new Octokit({
    auth: "AUTH"
});

export default octokit;