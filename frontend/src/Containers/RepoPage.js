import React, { useState, useEffect } from "react";
import "./RepoPage.css";
import backArrow from './elements/left-arrow.png';
import UserUtils from "../Hooks/UseUserName";
import RepoUtils from "../Hooks/UseRepoName";
import { Octokit } from "@octokit/core";
import './RepoPage.css';

const octokit = new Octokit({
    auth: "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",
});

export default ({ setList }) => {
    const [data,setData] = useState([]);
    const [link,setLink] = useState("");
    const { UseUserName } = UserUtils();
    const { UseRepoName } = RepoUtils();
    const userName = UseUserName();
    const repoName = UseRepoName();

    useEffect(async() => {
        const repoInfo = await octokit.request(`GET /repos/${userName}/${repoName}`);
        let name = repoInfo.data.full_name;
        let description = repoInfo.data.description;
        let stargazersCount = repoInfo.data.stargazers_count;
        let hyperlink = `https://github.com/${name}`;
        let tempData = [name,description,stargazersCount];
        setData(tempData);
        setLink(hyperlink);
    }, []);

    console.log(data);
    return(
        <div className="repo_page_body">
            <span onClick={()=>setList(true)} style={{cursor: "pointer"}}>Go back</span>
            {data.map((e)=>e === null ? <li>No description.</li> : <li>{e}</li>)}
            <a href={link}>{link}</a>
        </div>
    )
}