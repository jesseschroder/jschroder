import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/linkedin' element={<Linkedin/>}/>
      </Routes>
    </Router>
  )
}

function Linkedin() {
  window.location.replace('https://www.linkedin.com/in/jesse-schroder-a4ba3085/');
  return null;
}
