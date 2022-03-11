import Content from './Containers/Content.js';
import Header from './Containers/Header.js';
import RepoPage from './Containers/RepoPage.js';
import React, { useState } from 'react';
import { UserNameProvider } from './Hooks/UseUserName.js';
import { RepoNameProvider } from './Hooks/UseRepoName';
import Footer from './Containers/Footer.js';

function App() {
  const [list,setList] = useState(true);
  
  return (
    <UserNameProvider>
      <RepoNameProvider>
        <Header setList={setList}></Header>
        {list ? 
        <Content setList={setList}></Content> :
        <RepoPage setList={setList}></RepoPage>}
        <Footer></Footer>
      </RepoNameProvider>
    </UserNameProvider>
  );
}

export default App;
