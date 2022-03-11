import React from "react";
import './Header.css'
import { UseUserName } from "../Hooks/UseUserName.js";
import UserNameInput from "./UserNameInput";
export default ({ setList }) => {
    const { userName, ClearUserName } = UseUserName();
    return(
        <>
            <div className="header_body">
                <div className="header_col">
                    <div className="header_userName_frame">
                        <div className="header_userName_text">Current username: {userName}</div>
                    </div>
                </div>
                <div className="header_col">
                    <div className="header_input_frame">
                        <div className="header_input_text">Enter username: </div>
                        <UserNameInput setList={setList}></UserNameInput>
                    </div>
                </div>
                <div className="header_col">
                    <div onClick={ClearUserName} className="header_clear_button">
                        <div className="header_clear_text">
                            Clear username
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
