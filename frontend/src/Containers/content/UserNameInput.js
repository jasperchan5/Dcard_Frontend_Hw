import React, { useState, useEffect } from "react";
import { UseRepoName, UseUserName, UseStatus } from "../../Hooks";
import { Link } from 'react-router-dom';
import '../css/UserNameInput.css';

export default () => {
    const { userName, AddUserName } = UseUserName();
    const { ClearRepoName } = UseRepoName();
    const { EnableShowList } = UseStatus();
    const [inputName,setInputName] = useState("");
    
    const nameInput = <>
        <div className="input_box_frame">
            <div style={{display: "flex"}}>
                <input className="input_box_inner" value={inputName} onChange={(e)=>setInputName(e.target.value)} onKeyUp={(e)=>{
                    if(e.keyCode === 13){
                        AddUserName(inputName.toLowerCase());
                        EnableShowList();
                        ClearRepoName();
                        setInputName("");
                    }
                }}></input>
                <div className="input_box_button">
                </div>
            </div>
        </div>
    </>

    return nameInput;
}
