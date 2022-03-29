import React, { useEffect } from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import RepoList from './content/RepoList';
import RepoPage from './content/RepoPage.js';
import './css/Content.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UseUserName, UseRepoName } from '../Hooks';
import MainPage from './content/MainPage.js';

function App() {
  const { userName } = UseUserName();
  const { repoName } = UseRepoName();
  useEffect(() => {
    // console.log(userName,repoName);
  }, [userName,repoName]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
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
