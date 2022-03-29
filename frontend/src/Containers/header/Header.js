import React from "react";
import '../css/Header.css'
import { UseUserName, UseRepoCnt, UseRepoName } from "../../Hooks";
import { NavLink } from "react-router-dom";
export default () => {
    const { userName, ClearUserName } = UseUserName();
    const { ClearRepoName } = UseRepoName();
    const { UpdateRepoCnt } = UseRepoCnt();
    return(
        <>
            <div className="header_body">
                <div style={{width: "25%"}}>
                    <div className="header_userName_text">Current username:</div>
                </div>
                <div style={{width: "25%"}}>
                <div className="header_userName_content">{userName}</div>
                </div>
                <div style={{width: "25%"}}></div>
                <div style={{width: "25%"}}>
                    <div onClick={() => {
                        ClearUserName();
                        ClearRepoName();
                        UpdateRepoCnt(0);
                        localStorage.clear();
                    }} className="header_clear_button">
                        <NavLink to={{pathname: "/"}} style={{textDecoration: "none"}}>
                            <div className="header_clear_text">Clear username</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
