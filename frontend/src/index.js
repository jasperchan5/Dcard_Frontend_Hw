import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App.js';
import reportWebVitals from './reportWebVitals.js';
import { UserNameProvider, RepoNameProvider, StatusProvider } from './Hooks'

ReactDOM.render(
  <React.StrictMode>
    <UserNameProvider>
      <RepoNameProvider>
        <StatusProvider>
          <App/>
        </StatusProvider>
      </RepoNameProvider>
    </UserNameProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
