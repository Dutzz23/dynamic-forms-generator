import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function clearStorage() {
//     let session = sessionStorage.getItem('token');
//     if (session == null) {
//         localStorage.removeItem('token');
//     }
// }

// window.addEventListener('load', clearStorage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> TODO commented for react-beautiful-dnd
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
