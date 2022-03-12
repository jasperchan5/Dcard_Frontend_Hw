import React, { useState, useEffect } from "react";
import '../css/RepoList.css';

import { UseRepoName, UseUserName, UseStatus } from "../../Hooks";
import octokit from "../octokit";

export default () => {
    const { userName } = UseUserName();
    const { AddRepoName } = UseRepoName();
    const { DisableShowList, EnableUserName, repoCnt, UpdateRepoCnt } = UseStatus();
    const [dataCnt,setDataCnt] = useState(10);
    const [data,setData] = useState([]);

    // Use useEffect() to load 10 more repos when userName or total number of repos changes.
    useEffect(async() => {
        let tempData = [];
        try{
            const repoList = await octokit.request(`GET /users/${userName}/repos?per_page=100`);
            if(repoCnt === 0){
                UpdateRepoCnt(repoList.data.length);
            }
            repoList.data.forEach((e,i)=>{
                if(i < dataCnt){
                    tempData.push([e.name,e.stargazers_count]);
                }
            })
        }
        catch(e){
            console.log(e);
        }
        setData(tempData);
        if(tempData.length != 0){
            EnableUserName();
        }
    }, [userName,dataCnt]);
    
    // Add 10 new data when scrolling to the bottom
    window.onscroll = () => {
        if (window.scrollY > Math.abs(document.body.offsetHeight - window.outerHeight) + 80) {
            setDataCnt(dataCnt+10);
        }
    }

    return(
    <>
        {   
        <>
            <div style={{display: "flex"}}>
                <div style={{width: "50%", display: "flex"}}>
                    <div className="repo_title">Repositories list</div>
                </div>
                <div style={{width: "50%", display: "flex"}}>
                    <div className="repo_total_count_text">{repoCnt} repositories in total.</div>
                </div>
            </div>
            <div className="repo_divide_line"></div>
            <div style={{width: "100%", height: `${window.innerHeight}`}}>
                {
                data.map((e,i) => {
                    return(
                        <div key={"repo "+i} className="repo_info" onClick={()=>{
                            DisableShowList();
                            AddRepoName(e[0]);
                            }}>
                            <div style={{display: "flex"}}>
                                <div style={{display: "flex", width: "12.5%"}}>
                                    <div className="repo_number">
                                        {i+1}
                                    </div>
                                </div>
                                <div style={{display: "flex", width: "75%"}}>
                                    <div className="repo_name">
                                        {e[0]} 
                                    </div>
                                </div>
                                <div style={{display: "flex", width: "12.5%"}}>
                                    <div style={{display: "flex"}}>
                                        <div style={{display: "flex", width: "75%"}}>
                                            <img src="https://img.icons8.com/windows/32/000000/star--v2.png"/>
                                        </div>
                                        <div style={{display: "flex", width: "25%"}}>
                                            <div className="repo_page_stargazers_count">
                                                {e[1]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }    
                )}
            </div>
        </>
        }
    </>
    )
}