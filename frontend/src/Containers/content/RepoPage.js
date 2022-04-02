import React, { useState, useEffect } from "react";
import "../css/RepoPage.css";
import { UseRepoName, UseUserName } from "../../Hooks/index.js";
import backArrow from '../elements/left-arrow.png';
import gold_star from '../elements/gold-star.png';
import instance from "../../axios";

export default () => {
    const [data,setData] = useState([]);
    const [link,setLink] = useState("");
    const { userName } = UseUserName();
    const { repoName } = UseRepoName();

    useEffect(() => {
        const runApi = async() => {
            const {
                data: { repoInfo },
              } = await instance.get('/backend/getSingleRepo', {
                params: {
                  username: userName,
                  reponame: repoName
                },
              });
            let name = repoInfo.data.full_name;
            let description = repoInfo.data.description;
            let stargazersCount = repoInfo.data.stargazers_count;
            let hyperlink = `https://github.com/${name}`;
            let tempData = [name,description,stargazersCount];
            setData(tempData);
            setLink(hyperlink);
        }
        runApi();
    }, []);

    return(
        <>
            <div className="repo_page_body">
                <div style={{display: "flex"}}>
                    <div style={{width: "12.5%", display: "flex"}}>
                        <img src={backArrow} onClick={()=>window.location.href=`/users/${userName}/repos`}  className="repo_page_backButton"></img>
                    </div>
                    <div style={{width: "75%", display: "flex"}}>
                        <div className="repo_page_name">{data[0]}</div>   
                    </div>
                    <div style={{width: "12.5%", display: "flex"}}>
                        <div style={{display: "flex"}}>
                            <div style={{display: "flex", width: "75%"}}>
                                {
                                    data[2] === 0 ? <img src="https://img.icons8.com/windows/32/000000/star--v2.png"/> 
                                                  : <img style={{width: "32px", height: "32px"}} src={gold_star}></img>
                                }
                            </div>
                            <div style={{display: "flex", width: "25%"}}>
                                <div className="repo_page_stargazers_count">
                                    {data[2]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="repo_page_divide_line"></div>
                <div>
                    <div className="repo_page_description_text">Description: </div>
                    <div className="repo_page_description_inner">
                        {data[1] === null ? <div>No description.</div> : <div>{data[1]}</div>}
                    </div>
                </div>
                <div>
                    <div className="repo_page_description_text">Link: </div>
                    <div className="repo_page_description_inner">
                        <a className="repo_page_hyperlink" href={link}>{link}</a>
                    </div>
                </div>
            </div>
        </>
    )
}