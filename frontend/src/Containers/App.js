import React, { useEffect } from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import RepoList from './content/RepoList';
import RepoPage from './content/RepoPage.js';
import MainPage from './content/MainPage.js';

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
