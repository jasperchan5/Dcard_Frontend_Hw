import React from "react";
import '../css/Header.css'
import { UseUserName, UseStatus } from "../../Hooks";
export default () => {
    const { userName, ClearUserName } = UseUserName();
    const { DisableUserName, UpdateRepoCnt } = UseStatus();
    return(
        <>
            <div className="header_body">
                <div className="header_col">
                    <div className="header_userName_text">Current username: {userName}</div>
                </div>
                <div className="header_col"></div>
                <div className="header_col">
                    <div onClick={() => {
                        ClearUserName();
                        DisableUserName();
                        UpdateRepoCnt(0);
                    }} className="header_clear_button header_clear_text">
                        Clear username
                    </div>
                </div>
            </div>
        </>
    )
}
