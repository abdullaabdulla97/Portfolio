import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component we want to render

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the DOM node created by the HTML template (public/index.html) and tells React to take control of that DOM node
root.render( // Render the component tree into the root
  <React.StrictMode> {/*StrictMode adds extra checks/warnings*/}
    <App /> {/*Render the App component (which renders everything else)*/}
  </React.StrictMode>
);