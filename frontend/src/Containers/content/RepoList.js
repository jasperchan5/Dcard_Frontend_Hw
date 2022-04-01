import React, { useState, useEffect } from "react";
import '../css/RepoList.css';

import { UseRepoName, UseUserName, UseRepoCnt } from "../../Hooks/index.js";
import instance from "../../axios";
import error_404 from '../elements/error-404.png';
import gold_star from'../elements/gold-star.png';
import { NavLink } from "react-router-dom";

const RepoList = () => {
    const { userName } = UseUserName();
    const { AddRepoName } = UseRepoName();
    const { repoCnt, UpdateRepoCnt } = UseRepoCnt();
    const [dataCnt,setDataCnt] = useState(10);
    const [data,setData] = useState([]);
    const [loadComplete,setLoadComplete] = useState(false);

    // Use useEffect() to load 10 more repos when userName or total number of repos changes.
    useEffect(() => {
        const runApi = async() => {
            if(!loadComplete){
                let tempData = [];
                try{
                    const {
                        data: { repoList },
                    } = await instance.get('/api/getRepos', {
                        params: {
                        username: userName
                        },
                    });
                    if(repoCnt === 0 || repoCnt === null){
                        UpdateRepoCnt(repoList.data.length);
                    }
                    repoList.data.forEach((e,i)=>{
                        if(i < dataCnt){
                            tempData.push([e.name,e.stargazers_count]);
                        }
                    })
                }
                catch(e){
                    UpdateRepoCnt(0);
                    tempData.push("Error");
                    tempData.push(e.toString());
                }
                setData(tempData);
            }
        }
        runApi();
    }, [dataCnt]);
    
    // Add 10 new data when scrolling to the bottom
    window.onscroll = () => {
        let header = document.getElementsByClassName("header_body")[0];
        if(window.scrollY > 80){
            header.classList += " header_sticky"
        }
        else{
            header.classList = "header_body";
        }
        if (window.scrollY > Math.abs(document.body.offsetHeight - window.outerHeight) + 80) {
            // console.log(window.scrollY,document.body.offsetHeight,window.outerHeight);
            setDataCnt(dataCnt+10);
            if(dataCnt > repoCnt-10){
                setLoadComplete(true);
            }
            if(!loadComplete){
                window.scrollBy(0,-50);
            }
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
                    data[0] === "Error" ? 
                    <div className="repo_error_body">
                        <div className="repo_error_text">{data[1]}</div>
                        <div className="repo_error_img">
                            <img src={error_404}></img>
                        </div>
                    </div>
                    :
                    data.map((e,i) => {
                    return(
                        <div key={"repo "+i} className="repo_info" onClick={()=>{
                            AddRepoName(e[0]);
                            }}>
                            <NavLink to={`/users/${userName}/repos/${e[0]}`} style={{textDecoration: 'none'}}>
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
                                                <div style={{marginTop: "1.5vh"}}>
                                                    {
                                                        e[1] === 0 ?
                                                        <img alt="star_count" src="https://img.icons8.com/windows/32/000000/star--v2.png"/>
                                                        :
                                                        <img style={{width: "32px", height: "32px"}} alt="star_count" src={gold_star}/>
                                                    }
                                                    
                                                </div>
                                            </div>
                                            <div style={{display: "flex", width: "25%"}}>
                                                <div className="repo_stargazers_count">
                                                    {e[1]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
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

export default RepoList;