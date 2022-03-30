import React, { useState } from "react";
import { UseRepoName, UseUserName, UseErrorMessage } from "../../Hooks";
import Notification from '../Notification'; 
import '../css/UserNameInput.css';
import enter from '../elements/enter.png';

export default () => {
    const { AddUserName } = UseUserName();
    const { ClearRepoName } = UseRepoName();
    const { AddMessage } = UseErrorMessage();
    const [inputName,setInputName] = useState("");
    
    const nameInput = <>
        <div>
            <div style={{display: "flex"}}>
                <input className="input_box_inner" value={inputName} onChange={(e)=>setInputName(e.target.value)} onKeyUp={(e)=>{
                    if(e.key === 'Enter'){
                        document.getElementsByClassName("input_box_button_img")[0].click();
                    }
                }}></input>
                <div className="input_box_button">
                    {
                        inputName === "" ? 
                        <div className="input_box_button_img" onClick={
                            () => {
                                AddMessage("No username!");
                            }
                        }>
                            <img src={enter}></img>
                        </div>
                        :
                        <div className="input_box_button_img" onClick={
                        () => {
                            AddUserName(inputName.toLowerCase());
                            ClearRepoName();
                            setInputName("");
                            window.location.href = `users/${inputName}/repos`;
                        }}>
                            <img src={enter}></img>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    </>

    return nameInput;
}
