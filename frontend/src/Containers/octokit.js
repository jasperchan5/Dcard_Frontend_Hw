import { Octokit } from "@octokit/core";
import AUTH from "./token";

const octokit = new Octokit({
    auth: AUTH
});

export default octokit;