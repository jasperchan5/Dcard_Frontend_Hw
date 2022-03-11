import React, { useContext, useState } from "react";
import { UseUserName } from "../Hooks/UseUserName";
import { UseRepoName } from "../Hooks/UseRepoName";
import './UserNameInput.css';

export default ({ setList }) => {
    const { AddUserName } = UseUserName();
    const { ClearRepoName } = UseRepoName();
    const [inputName,setInputName] = useState("");
    
    const nameInput = <>
        <div className="input_box_frame">
            <input className="input_box_inner" value={inputName} onChange={(e)=>setInputName(e.target.value)} onKeyUp={(e)=>{
                if(e.keyCode === 13){
                    AddUserName(inputName);
                    setList(true);
                    ClearRepoName();
                    setInputName("");
                }
            }}></input>
        </div>
    </>

    return nameInput;
}
