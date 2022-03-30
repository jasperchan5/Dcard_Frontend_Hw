import React, { useEffect } from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import RepoList from './content/RepoList';
import RepoPage from './content/RepoPage.js';
import MainPage from './content/MainPage.js';
import octokit from './octokit.js';

import './css/Content.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UseUserName, UseRepoName, UseRepoCnt } from '../Hooks';

function App() {
  // Get username and reponame from the url
  const { userName, AddUserName } = UseUserName();
  const { repoName, AddRepoName } = UseRepoName();
  const { repoCnt, UpdateRepoCnt } = UseRepoCnt();

  useEffect(async() => {
    const currUser = window.location.href.split("/")[4];
    const currRepo = window.location.href.split("/")[6];
    AddUserName(currUser);
    AddRepoName(currRepo);
    const repoList = await octokit.request(`GET /users/${currUser}/repos?per_page=100`);
    if(repoCnt === 0 || repoCnt === null){
        UpdateRepoCnt(repoList.data.length);
    }
  }, [userName,repoName,repoCnt]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route className='content_fade_in'  path='/' element={
            <>
              <Header/>
              <MainPage/>
              <Footer/>
            </>
          }/>
          <Route className='content_fade_in' path={`/users/${userName}/repos`} element={
            <>
              <Header/>
              <RepoList/>
              <Footer/>
            </>
          }/>
          <Route className='content_fade_in' path={`/users/${userName}/repos/${repoName}`} element={
            <>
              <Header/>
              <RepoPage/>
              <Footer/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
