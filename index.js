import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//here we import the component and export in App.js


// 'StrictMode' does additional tests for us and reports warnings

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

