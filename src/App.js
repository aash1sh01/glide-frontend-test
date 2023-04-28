import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Jobs from './Pages/Jobs';
import Community from './Pages/Community';
import Resources from './Pages/Resources';
import ApplyJob from './Pages/ApplyJob';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Community/>}>
            </Route>
          <Route path="/jobs" element={<Jobs/>}>
          </Route>
          <Route path="/community" element={<Community/>}>
          </Route>
          <Route path="/resources" element={<Resources/>}>

          </Route>
          <Route path="/apply" element={<ApplyJob job/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
