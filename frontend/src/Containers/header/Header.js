import React from "react";
import '../css/Header.css'
import { UseUserName, UseRepoCnt, UseRepoName, UseErrorMessage } from "../../Hooks";

const Header = () => {
    const { userName, ClearUserName } = UseUserName();
    const { repoName, ClearRepoName } = UseRepoName();
    const { repoCnt, ClearRepoCnt } = UseRepoCnt();
    const { AddMessage } = UseErrorMessage();
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
                    <button onClick={() => {
                        if(window.location.pathname === '/'){
                            // console.log("Nothing to clear");
                            AddMessage("Already in the main page!");
                        }
                        else{
                            // console.log("Back to the biginning");
                            ClearUserName();
                            ClearRepoName();
                            ClearRepoCnt();
                            window.location.href = "/";
                        }
                    }} className="header_clear_button">
                        <div className="header_clear_text">Go back</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;