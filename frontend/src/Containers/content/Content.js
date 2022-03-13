import React, { useEffect } from 'react';
import RepoPage from './RepoPage.js';
import RepoList from './RepoList.js';
import { UseStatus, UseUserName, UseRepoName } from '../../Hooks';
import RepoNotFound from './RepoNotFound.js';
import '../css/Content.css'
import { Route, Routes } from 'react-router-dom';
import UserNameInput from './UserNameInput.js';
import Notification from '../Notification'; 

export default () => {
    const { showList, validUserName } = UseStatus();
    const { userName } = UseUserName();
    const { repoName } = UseRepoName();
    const { warning } = Notification();

    return(
        <div>
            <div style={{display: validUserName ? "block" : "none"}}>
            {
                <Routes>
                {   
                    showList ? 
                        <Route className='content_fade_in' path={`/users/${userName}/repos`} element={<RepoList/>}/>
                    :
                        <Route className='content_fade_in' path={`/users/${userName}/repos/${repoName}`} element={<RepoPage/>}/>
                }
                </Routes>
            }
            </div>
            <div style={{display: validUserName ? "none" : "block"}} className='content_fade_in content_frame'>
                <Routes>
                    <Route path='/' element={
                    <>
                        <div className='content_noRepo'>
                            <RepoNotFound/>
                        </div>
                        <div className='content_warning'>
                            {warning}
                        </div>
                        <div className='content_input'>
                            <UserNameInput/>
                        </div>
                    </>}/>
                </Routes>
            </div>
        </div>
    )
}