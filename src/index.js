//////////////////////////////////////////////////////
//Site Page Initializer
//Place all Key Components and organize order Here
//////////////////////////////////////////////////////

import './SASS/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HEADER_CONTENT from './JS/header/header';
import MAIN_CONTENT from './JS/content/main';
import FOOTER_CONTENT from './JS/footer/footer';
import reportWebVitals from './reportWebVitals';


//Header Content
//Main Content
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <HEADER_CONTENT />
      <MAIN_CONTENT />
      <FOOTER_CONTENT />
    </React.StrictMode>
  );
}catch(e){}

//Footer Content

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
