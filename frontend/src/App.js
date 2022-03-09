import './App.css';
import Content from './Containers/Content.js';
import Header from './Containers/Header.js';
import RepoPage from './Containers/RepoPage.js';
import React, { useState } from 'react';
import UserUtils from './Hooks/UseUserName.js';
import RepoUtils from './Hooks/UseRepoName';


function App() {
  const { UserNameProvider, userName, setUserName } = UserUtils();
  const { RepoNameProvider, repoName, setRepoName } = RepoUtils();
  const [list,setList] = useState(true);
  return (
    <UserNameProvider value={userName}>
      <RepoNameProvider value={repoName}>
        <Header></Header>
        {list ? 
        <Content name={userName} setRepoName={setRepoName} setUserName={setUserName} setList={setList}></Content> :
        <RepoPage repoName={repoName} setRepoName={setRepoName} setList={setList}></RepoPage>}
      </RepoNameProvider>
    </UserNameProvider>
  );
}

export default App;
