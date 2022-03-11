import React, { useState, useEffect } from "react";
import './Content.css';
import { UseUserName } from '../Hooks/UseUserName';
import { UseRepoName } from "../Hooks/UseRepoName";
import { Octokit } from "@octokit/core";
import { Link } from "react-router-dom";

const octokit = new Octokit({
    auth: "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",
});

export default ({ setList }) => {
    const { userName } = UseUserName();
    const { repoName, AddRepoName } = UseRepoName();
    const [totalDataCnt,setTotalDataCnt] = useState(10);
    const [data,setData] = useState([]);

    // Use an useEffect() to load 10 more repos when userName or total number of repos changes.
    useEffect(async() => {
        let tempData = [];
        try{
            const repoList = await octokit.request(`GET /users/${userName}/repos`);
            repoList.data.forEach((e,i)=>{
                if(i < totalDataCnt){
                    tempData.push([e.name,e.stargazers_count]);
                }
            })
        }
        catch(e){}
        setData(tempData);
    }, [userName,totalDataCnt]);
    
    // Add 10 new data when scrolling to the bottom
    window.onscroll = () => {
        if (window.scrollY > Math.abs(document.body.offsetHeight - window.outerHeight) + 80) {
            setTotalDataCnt(totalDataCnt+10);
        }
    }

    return(
    <>
        {   
        <>
            <div className="repo_title">Repository list</div>
            <div className="repo_divide_line"></div>
            <div style={{height: `${window.innerHeight}`}}>
                {data.length === 0 ? 
                <>
                    <div className="repo_noData">
                        Repositories not found. Please enter a valid username.
                    </div>
                    <div className="repo_noData_image">
                        <img src="https://img.icons8.com/windows/96/000000/no-data-availible.png"/>
                    </div>
                </> : 
                data.map((e,i) => {
                    return(
                        <div key={"repo "+i} className="repo_info" onClick={()=>{
                            setList(false);
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