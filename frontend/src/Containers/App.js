import React from 'react';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Content from './content/Content.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={
            <>
              <Header></Header>
              <Content></Content>
              <Footer></Footer>
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
