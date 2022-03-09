import React, { useContext } from "react";
import './Header.css'
import UserUtils from "../Hooks/UseUserName.js";
export default () => {
    const { UseUserName, ClearUserName, setUserName } = UserUtils();
    const userName = UseUserName();
    return(
        <div className="header_body">
            <span className="header_userName">{userName}</span>
            <span className="header_userName" style={{cursor: "pointer"}} onClick={()=>{setUserName("")}}>Clear name</span>
        </div>
    )
}
