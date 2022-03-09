import React, { useState, useEffect } from "react";
import './Content.css';
import UserUtils from '../Hooks/UseUserName';
import RepoUtils from "../Hooks/UseRepoName";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: "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",
});

export default ({ setRepoName, setUserName, setList }) => {
    const { UseUserName } = UserUtils();
    const [totalHeight,setTotalHeight] = useState(window.innerHeight);
    const [data,setData] = useState([]);
    const userName = UseUserName();
    const [inputName,setInputName] = useState("");

    useEffect(async() => {
        const repoList = await octokit.request(`GET /users/${userName}/repos`);
        let tempData = [];
        repoList.data.forEach((e)=>{
            tempData.push([e.name,e.stargazers_count]);
        })
        tempData.sort();
        setData(tempData);
    }, []);

    const userNameInput = <>
        <input value={inputName} onChange={(e)=>setInputName(e.target.value)} onKeyUp={(e)=>{
            if(e.keyCode === 13){
                setUserName(inputName);
            }
        }}></input>
    </>

    return(
    <>
        {userName === "" ? <div className="repo_frame">No data {userNameInput}</div> : <div className="repo_frame" style={{height: `${totalHeight}`}}>
            {data.map((e,i) => {
                return(
                    <div key={"repo "+i} className="repo_info repo_name" onClick={()=>{
                        setList(false);
                        setRepoName(e[0]);
                        }}>
                        {e[0]} {e[1]}
                    </div>
                )
            }    
            )}
        </div>}
    </>
    )
}