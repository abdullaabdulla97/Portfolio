import './style.css'; // Import the file styles.css so that styles can be applied to the entire app
import React from 'react'; // Import react for JSX components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //BrowserRouter watches the URL and provides routing context to children, Route maps a URL path to a specific React element and Routes is the container for all Route elements
import Navbar from './components/Navbar'; // Import the NavBar component from the file NavBar
import Home from './components/HomePage'; // Import the Home page that renders all sections of the portfolio

function App() { // Defines the functional App component (root of the React tree)
  return (
    <div className="App"> {/*Wrapper div for potential app-wide layout hooks or CSS scoping*/}
      <Router> {/*Provide router context so <Routes> and <Link> work throught the app*/}
        <div>
          <Navbar/> {/*Place Navbar outside <Routes> so it's always visible regardless of route */}
          <Routes> {/*Declare the set of routes for this application*/}
            <Route path="/" element={<Home/>}></Route> {/*The path when the browser URL is "/", it renders Home. The element is the React element that should render for this path  */}
            <Route path="*" element={<div>404 Not Found</div>}></Route> {/* "*" to catch all route (any unmatched path). For a simple 404 fallback */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App; // Export App so index.jsx can import and render it